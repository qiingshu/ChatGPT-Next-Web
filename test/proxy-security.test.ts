/** @jest-environment node */
import { describe, expect, test, jest } from "@jest/globals";
import { PassThrough } from "node:stream";
import type { IncomingMessage } from "node:http";
import type { request } from "node:https";
import {
  isPublicAddress, parseProxyTarget, resolvePublicTarget, pinnedRequestOptions,
  requestPublicHttps, buildProxyUrl, ProxyTargetError,
} from "../app/api/proxy-security";

const blocked = [
  "0.0.0.0", "0.1.2.3", "10.0.0.1", "100.64.0.1", "100.100.100.200", "100.127.255.255",
  "127.0.0.1", "127.255.255.255", "169.254.169.254", "172.16.0.1", "172.31.255.255",
  "192.0.0.9", "192.0.2.1", "192.88.99.1", "192.168.0.1", "198.18.0.1", "198.19.255.255",
  "198.51.100.1", "203.0.113.1", "224.0.0.1", "240.0.0.1", "255.255.255.255", "168.63.129.16",
  "::", "::1", "::ffff:127.0.0.1", "::ffff:7f00:1", "::ffff:8.8.8.8",
  "64:ff9b::7f00:1", "64:ff9b:1::1", "100::1", "2001::1", "2001:2::1",
  "2001:db8::1", "2002:7f00:1::", "3ffe::1", "3fff::1", "fc00::1", "fd00::1",
  "fe80::1", "ff02::1", "fe80::1%eth0", "not-an-ip",
];
describe("SSRF address boundaries", () => {
  test.each(blocked)("rejects special-use address %s", (address) => expect(isPublicAddress(address)).toBe(false));
  test.each(["1.1.1.1", "8.8.8.8", "172.15.255.255", "172.32.0.1", "100.63.255.255", "100.128.0.1", "2606:4700:4700::1111", "2001:4860:4860::8888"])(
    "accepts public address %s", (address) => expect(isPublicAddress(address)).toBe(true),
  );
  test.each([
    "http://api.example.com", "file:///etc/passwd", "ftp://api.example.com", "https://user:pass@api.example.com",
    "https://api.example.com/#fragment", "https://localhost", "https://localhost.", "https://api.localhost",
    "https://metadata.google.internal", "https://service.internal", "https://service.home.arpa", "https://service.local",
    "https://metadata", "https://127.1", "https://2130706433", "https://0x7f000001", "https://0177.0.0.1",
    "https://[::1]", "https://[::ffff:169.254.169.254]", "https://[fe80::1%25eth0]",
  ])("rejects unsafe URL %s", (url) => expect(() => parseProxyTarget(url)).toThrow(ProxyTargetError));
  test("canonicalizes an ordinary public host and preserves legitimate custom ports", () => {
    expect(parseProxyTarget("https://API.EXAMPLE.COM.:8443/v1").href).toBe("https://api.example.com:8443/v1");
  });
});
describe("DNS validation and pinning", () => {
  test("rejects mixed public/private answers, not just the first answer", async () => {
    const resolver = async () => [{ address: "1.1.1.1", family: 4 }, { address: "::1", family: 6 }];
    await expect(resolvePublicTarget(new URL("https://api.example.com"), new AbortController().signal, resolver)).rejects.toThrow(ProxyTargetError);
  });
  test("rejects DNS answers that are empty, malformed or family-inconsistent", async () => {
    for (const answers of [[], [{ address: "127.0.0.1", family: 4 }], [{ address: "1.1.1.1", family: 6 }]]) {
      await expect(resolvePublicTarget(new URL("https://api.example.com"), new AbortController().signal, async () => answers)).rejects.toThrow();
    }
  });
  test("pins the connection to the validated answer, preserving TLS identity", async () => {
    let resolutions = 0;
    const address = await resolvePublicTarget(new URL("https://api.example.com:8443"), new AbortController().signal, async () => {
      resolutions++;
      return [{ address: resolutions === 1 ? "1.1.1.1" : "127.0.0.1", family: 4 }];
    });
    const options = pinnedRequestOptions(new URL("https://api.example.com:8443/v1?q=1"), address, "POST", { Host: "evil.invalid" });
    expect(options.hostname).toBe("api.example.com");
    expect(options.servername).toBe("api.example.com");
    expect(options.rejectUnauthorized).toBe(true);
    expect(options.headers).toMatchObject({ Host: "api.example.com:8443" });
    const agent = options.agent as any;
    const callback = jest.fn();
    agent.options.lookup("api.example.com", {}, callback);
    expect(callback).toHaveBeenCalledWith(null, "1.1.1.1", 4);
    expect(resolutions).toBe(1);
    expect(agent.options.keepAlive).toBe(false);
    agent.destroy();
  });
  test("never opens an HTTP request for a private DNS result", async () => {
    const send = jest.fn() as unknown as typeof request;
    await expect(requestPublicHttps(new URL("https://api.example.com"), {
      method: "GET", headers: {}, body: null, signal: new AbortController().signal,
    }, async () => [{ address: "10.0.0.1", family: 4 }], send)).rejects.toThrow(ProxyTargetError);
    expect(send).not.toHaveBeenCalled();
  });
  test("DNS resolution and cancellation are bounded", async () => {
    jest.useFakeTimers();
    const promise = resolvePublicTarget(new URL("https://api.example.com"), new AbortController().signal, () => new Promise(() => {}));
    const rejected = expect(promise).rejects.toThrow("超时");
    await jest.advanceTimersByTimeAsync(5001);
    await rejected;
    jest.useRealTimers();
    const controller = new AbortController();
    const pending = resolvePublicTarget(new URL("https://api.example.com"), controller.signal, () => new Promise(() => {}));
    controller.abort();
    await expect(pending).rejects.toThrow("取消");
  });
});
describe("HTTPS request and redirect handling", () => {
  const init = () => ({ method: "GET", headers: { "X-Plugin-Fixture": "public" }, body: null, signal: new AbortController().signal });
  const resolver = async () => [{ address: "1.1.1.1", family: 4 }];
  function transport(status: number, location?: string) {
    const send = jest.fn((options: any, callback: (res: IncomingMessage) => void) => {
      const outgoing = new PassThrough() as any;
      outgoing.once("response", callback);
      outgoing.end = () => {
        const response = new PassThrough() as any;
        response.statusCode = status;
        response.headers = location ? { location } : { "content-type": "application/json" };
        outgoing.emit("response", response);
        if (!response.destroyed) response.end('{"ok":true}');
        return outgoing;
      };
      return outgoing;
    });
    return send;
  }
  test.each([301, 302, 303, 307, 308])("rejects %s without following Location", async (status) => {
    for (const location of ["http://169.254.169.254/", "https://127.0.0.1/", "https://[::1]/", "https://other-public.example.com/"]) {
      const send = transport(status, location);
      await expect(requestPublicHttps(new URL("https://api.example.com"), init(), resolver, send as unknown as typeof request)).rejects.toThrow(ProxyTargetError);
      expect(send).toHaveBeenCalledTimes(1);
    }
  });
  test("accepts and streams a public HTTPS API response", async () => {
    const send = transport(200);
    const response = await requestPublicHttps(new URL("https://api.example.com"), init(), resolver, send as unknown as typeof request);
    let text = "";
    for await (const chunk of response) text += chunk;
    expect(JSON.parse(text)).toEqual({ ok: true });
    expect(send).toHaveBeenCalledTimes(1);
  });
  test("builds API paths without replacing the authority or losing query parameters", () => {
    const target = buildProxyUrl(parseProxyTarget("https://api.example.com/v1?base=1"), ["chat", "completions"], new URLSearchParams("q=2&path=ignored"));
    expect(target.href).toBe("https://api.example.com/v1/chat/completions?base=1&q=2");
    const hostile = buildProxyUrl(parseProxyTarget("https://api.example.com/v1"), ["//127.0.0.1", "\\\\localhost"], new URLSearchParams());
    expect(hostile.hostname).toBe("api.example.com");
  });
});
