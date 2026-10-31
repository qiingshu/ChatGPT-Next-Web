import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import { Agent, request as httpsRequest, type RequestOptions } from "node:https";
import type { IncomingMessage } from "node:http";
import { Readable } from "node:stream";

export class ProxyTargetError extends Error {
  constructor() { super("代理目标不允许：仅支持公网 HTTPS API，且不跟随重定向。"); }
}
export type PublicAddress = { address: string; family: 4 | 6 };
export type Resolver = (hostname: string) => Promise<Array<{ address: string; family: number }>>;

const hostnameOf = (url: URL) => url.hostname.replace(/^\[|\]$/g, "").replace(/\.+$/, "").toLowerCase();

export function isPublicAddress(address: string): boolean {
  const family = isIP(address);
  if (family === 4) {
    const [a, b, c] = address.split(".").map(Number);
    return !(
      a === 0 || a === 10 || a === 127 || a >= 224 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && (b === 168 || (b === 0 && (c === 0 || c === 2)) || (b === 88 && c === 99))) ||
      (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) ||
      (a === 203 && b === 0 && c === 113) ||
      address === "168.63.129.16"
    );
  }
  if (family !== 6) return false;
  try {
    // WHATWG URL canonicalizes dotted IPv4 tails; zone IDs are rejected.
    const normalized = hostnameOf(new URL("https://[" + address + "]/"));
    const [left, right] = normalized.split("::");
    const first = left ? left.split(":") : [];
    const last = right ? right.split(":") : [];
    const groups = right === undefined
      ? first
      : [...first, ...Array(8 - first.length - last.length).fill("0"), ...last];
    if (groups.length !== 8) return false;
    const words = groups.map((word) => parseInt(word, 16));
    // Only global unicast 2000::/3. Reject mapped, NAT64, ULA, link-local,
    // multicast, Teredo/6to4, documentation and reserved protocol ranges.
    return (words[0] & 0xe000) === 0x2000 &&
      !(words[0] === 0x2001 && (words[1] < 0x0200 || words[1] === 0x0db8)) &&
      words[0] !== 0x2002 && words[0] !== 0x3ffe &&
      !(words[0] === 0x3fff && (words[1] & 0xf000) === 0);
  } catch { return false; }
}

export function parseProxyTarget(raw: string): URL {
  let url: URL;
  try { url = new URL(raw); } catch { throw new ProxyTargetError(); }
  if (url.protocol !== "https:" || url.username || url.password || url.hash)
    throw new ProxyTargetError();
  const host = hostnameOf(url);
  if (!host || (!isIP(host) && (
    !host.includes(".") ||
    /(?:^|\.)(?:localhost|localdomain|internal|local|lan|home|corp|intranet|onion|invalid|test|example|arpa)$/.test(host)
  ))) throw new ProxyTargetError();
  if (isIP(host) && !isPublicAddress(host)) throw new ProxyTargetError();
  if (!isIP(host)) url.hostname = host;
  return url;
}

export async function resolvePublicTarget(
  target: URL,
  signal: AbortSignal,
  resolver: Resolver = (host) => lookup(host, { all: true, verbatim: true }),
): Promise<PublicAddress> {
  const checked = parseProxyTarget(target.href);
  const host = hostnameOf(checked);
  if (isIP(host)) return { address: host, family: isIP(host) as 4 | 6 };
  let timer: ReturnType<typeof setTimeout> | undefined;
  let abort: () => void = () => {};
  const addresses = await Promise.race([
    resolver(host),
    new Promise<never>((_resolve, reject) => {
      abort = () => reject(new Error("代理请求已取消"));
      if (signal.aborted) return abort();
      signal.addEventListener("abort", abort, { once: true });
      timer = setTimeout(() => reject(new Error("代理 DNS 解析超时")), 5000);
    }),
  ]).finally(() => {
    clearTimeout(timer);
    signal.removeEventListener("abort", abort);
  });
  // Reject the entire answer set if ANY answer is private or malformed.
  if (!addresses.length || addresses.some((item) =>
    (item.family !== 4 && item.family !== 6) ||
    isIP(item.address) !== item.family || !isPublicAddress(item.address)))
    throw new ProxyTargetError();
  const chosen = addresses.find((item) => item.family === 4) ?? addresses[0];
  return { address: chosen.address, family: chosen.family as 4 | 6 };
}

export function buildProxyUrl(base: URL, path: string[], query: URLSearchParams): URL {
  const url = new URL(base.href);
  url.pathname = url.pathname.replace(/\/+$/, "") + "/" + path.map(encodeURIComponent).join("/");
  query.forEach((value, key) => {
    if (key !== "path" && key !== "provider") url.searchParams.append(key, value);
  });
  return parseProxyTarget(url.href);
}

// A fresh Agent and pinned lookup prevent a second DNS resolution, connection
// pooling or automatic fallback from switching to an unchecked address.
export function pinnedRequestOptions(
  target: URL, address: PublicAddress, method: string, headers: Record<string, string>,
): RequestOptions {
  const checked = parseProxyTarget(target.href);
  if (!isPublicAddress(address.address) || isIP(address.address) !== address.family)
    throw new ProxyTargetError();
  const host = hostnameOf(checked);
  return {
    protocol: "https:",
    hostname: host,
    port: checked.port || 443,
    path: checked.pathname + checked.search,
    method,
    headers: { ...headers, Host: checked.host },
    family: address.family,
    servername: isIP(host) ? undefined : host,
    rejectUnauthorized: true,
    agent: new Agent({
      keepAlive: false,
      maxCachedSessions: 0,
      lookup: (_host, _options, callback) => callback(null, address.address, address.family),
    }),
  };
}

export async function requestPublicHttps(
  target: URL,
  init: { method: string; headers: Record<string, string>; body: ReadableStream<Uint8Array> | null; signal: AbortSignal },
  resolver?: Resolver,
  send: typeof httpsRequest = httpsRequest,
): Promise<IncomingMessage> {
  const address = await resolvePublicTarget(target, init.signal, resolver);
  if (init.signal.aborted) throw new Error("代理请求已取消");
  const options = pinnedRequestOptions(target, address, init.method, init.headers);
  return new Promise((resolve, reject) => {
    let response: IncomingMessage | undefined;
    const outgoing = send({ ...options, signal: init.signal }, (res) => {
      response = res;
      const status = res.statusCode ?? 502;
      if (status >= 300 && status < 400 && status !== 304) {
        res.destroy();
        reject(new ProxyTargetError());
        return;
      }
      resolve(res);
    });
    const cleanup = () => (options.agent as Agent).destroy();
    outgoing.on("error", () => {
      response?.destroy();
      cleanup();
      reject(new Error("第三方 HTTPS 接口连接失败"));
    });
    outgoing.on("response", (res) => {
      res.once("end", cleanup);
      res.once("close", cleanup);
      res.once("error", cleanup);
    });
    if (init.body) {
      const input = Readable.fromWeb(init.body as any);
      input.on("error", () => outgoing.destroy(new Error("代理请求体读取失败")));
      outgoing.on("close", () => input.destroy());
      input.pipe(outgoing);
    } else outgoing.end();
  });
}
