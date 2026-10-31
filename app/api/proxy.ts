import { NextRequest, NextResponse } from "next/server";
import { Readable } from "node:stream";
import { auth } from "./auth";
import { ACCESS_CODE_PREFIX, ModelProvider, OPENAI_BASE_URL, GEMINI_BASE_URL, ANTHROPIC_BASE_URL, ALIBABA_BASE_URL } from "@/app/constant";
import { getServerSideConfig } from "@/app/config/server";
import { buildProxyUrl, parseProxyTarget, ProxyTargetError, requestPublicHttps } from "./proxy-security";

export async function handle(req: NextRequest, { params }: { params: { path: string[] } }) {
  if (req.method === "OPTIONS") return new Response(null, { status: 204 });
  const callerAuth = req.headers.get("Authorization") ?? "";
  // Keep application authorization separate from a plugin's own API credentials.
  const applicationHeaders = new Headers();
  const nativeKey = req.headers.get("x-goog-api-key") || req.headers.get("x-api-key") || req.headers.get("api-key");
  applicationHeaders.set("Authorization", req.headers.get("x-nextchat-authorization") || callerAuth || (nativeKey ? "Bearer " + nativeKey : ""));
  const result = auth(new NextRequest(req.url, { headers: applicationHeaders }), ModelProvider.GPT);
  if (result.error) return NextResponse.json(result, { status: 401 });
  const controller = new AbortController();
  const cancel = () => controller.abort();
  req.signal.addEventListener("abort", cancel, { once: true });
  const timeout = setTimeout(cancel, 10 * 60 * 1000);
  if (req.signal.aborted) cancel();
  const cleanup = () => {
    clearTimeout(timeout);
    req.signal.removeEventListener("abort", cancel);
  };
  try {
    let raw = req.headers.get("x-base-url") ?? "";
    let path = params.path;
    // Keep the previous fixed-provider proxy URLs, but run them through the
    // same DNS/TLS checks instead of bypassing the route via rewrites.
    if (!raw) {
      const legacy: Record<string, string> = {
        openai: OPENAI_BASE_URL, google: GEMINI_BASE_URL,
        anthropic: ANTHROPIC_BASE_URL, alibaba: ALIBABA_BASE_URL,
      };
      if (path[0] === "azure") {
        if (!/^[a-z0-9][a-z0-9-]*$/i.test(path[1] ?? "") || path[2] !== "deployments")
          throw new ProxyTargetError();
        raw = "https://" + path[1] + ".openai.azure.com/openai";
        path = path.slice(2);
      } else if (legacy[path[0]]) {
        raw = legacy[path[0]];
        path = path.slice(1);
      }
    }
    const base = parseProxyTarget(raw);
    const target = buildProxyUrl(base, path, req.nextUrl.searchParams);
    const connectionHeaders = (req.headers.get("connection") ?? "").split(",").map((v) => v.trim().toLowerCase());
    const denied = new Set([
      ...connectionHeaders, "host", "connection", "keep-alive", "transfer-encoding",
      "te", "trailer", "upgrade", "proxy-authorization", "proxy-authenticate",
      "cookie", "origin", "referer", "content-length", "accept-encoding",
      "x-base-url", "x-nextchat-authorization", "x-real-ip",
    ]);
    const headers: Record<string, string> = {};
    req.headers.forEach((value, key) => {
      if (!denied.has(key) && !key.startsWith("sec-") &&
          !key.startsWith("x-forwarded-") && !key.startsWith("x-vercel-")) headers[key] = value;
    });
    // Site access codes and application-only headers never go to third parties.
    if (callerAuth.replace(/^Bearer\s+/i, "").startsWith(ACCESS_CODE_PREFIX))
      delete headers.authorization;
    if (target.origin === "https://api.openai.com" && !headers.authorization) {
      const serverKey = getServerSideConfig().apiKey;
      if (!serverKey) {
        cleanup();
        return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 });
      }
      headers.authorization = "Bearer " + serverKey;
    }
    headers["accept-encoding"] = "identity";
    const response = await requestPublicHttps(target, {
      method: req.method, headers, body: req.body, signal: controller.signal,
    });
    response.once("end", cleanup);
    response.once("close", cleanup);
    response.once("error", cleanup);
    const responseHeaders = new Headers();
    const responseHopHeaders = String(response.headers.connection ?? "").split(",").map((value) => value.trim().toLowerCase());
    for (const [key, value] of Object.entries(response.headers)) {
      if (value !== undefined && !responseHopHeaders.includes(key) && ![
        "connection", "keep-alive", "transfer-encoding", "content-length",
        "set-cookie", "www-authenticate", "proxy-authenticate", "location",
      ].includes(key)) responseHeaders.set(key, Array.isArray(value) ? value.join(", ") : value);
    }
    // node:https returns raw bytes, so preserve Content-Encoding if upstream ignores identity.
    responseHeaders.set("cache-control", "no-store");
    responseHeaders.set("x-accel-buffering", "no");
    const status = response.statusCode ?? 502;
    if ([204, 205, 304].includes(status) || req.method === "HEAD") {
      response.resume();
      return new Response(null, { status, headers: responseHeaders });
    }
    return new Response(Readable.toWeb(response) as ReadableStream<Uint8Array>, { status, headers: responseHeaders });
  } catch (error) {
    cleanup();
    return NextResponse.json(
      { error: { message: error instanceof ProxyTargetError ? error.message : "第三方 HTTPS 接口连接失败或超时" } },
      { status: error instanceof ProxyTargetError ? 400 : 502 },
    );
  } finally {
    // Streaming responses retain timeout/abort listeners until their body closes.
    // Non-streaming early returns have no socket and can clear immediately.
    if (controller.signal.aborted) cleanup();
  }
}
