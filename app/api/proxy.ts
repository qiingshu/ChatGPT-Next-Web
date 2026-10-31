import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
import { ACCESS_CODE_PREFIX, ModelProvider } from "@/app/constant";
import { getServerSideConfig } from "@/app/config/server";

export async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  console.log("[Proxy Route] params ", params);

  if (req.method === "OPTIONS") {
    return NextResponse.json({ body: "OK" }, { status: 200 });
  }
  const callerAuth = req.headers.get("Authorization") ?? "";
  const authResult = auth(req, ModelProvider.GPT);
  if (authResult.error) return NextResponse.json(authResult, { status: 401 });
  const serverConfig = getServerSideConfig();
  let target: URL;
  try {
    target = new URL(req.headers.get("x-base-url") ?? "");
    if (target.protocol !== "https:" || target.username || target.password)
      throw new Error();
  } catch {
    return NextResponse.json({ error: "Invalid proxy URL" }, { status: 400 });
  }
  // The generic proxy only forwards caller credentials; server credentials are
  // restricted to the exact OpenAI origin, never a caller-controlled hostname.

  // remove path params from searchParams
  req.nextUrl.searchParams.delete("path");
  req.nextUrl.searchParams.delete("provider");

  const subpath = params.path.join("/");
  const fetchUrl = `${req.headers.get(
    "x-base-url",
  )}/${subpath}?${req.nextUrl.searchParams.toString()}`;
  const skipHeaders = ["connection", "host", "origin", "referer", "cookie"];
  const headers = new Headers(
    Array.from(req.headers.entries()).filter((item) => {
      if (
        item[0].indexOf("x-") > -1 ||
        item[0].indexOf("sec-") > -1 ||
        skipHeaders.includes(item[0])
      ) {
        return false;
      }
      return true;
    }),
  );
  headers.delete("Authorization");
  if (!callerAuth.replace(/^Bearer\s+/i, "").startsWith(ACCESS_CODE_PREFIX))
    headers.set("Authorization", callerAuth);
  // if dalle3 use openai api key
  if (
    target.origin === "https://api.openai.com" &&
    !headers.get("Authorization")
  ) {
    if (!serverConfig.apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 },
      );
    }
    headers.set("Authorization", `Bearer ${serverConfig.apiKey}`);
  }

  const controller = new AbortController();
  const fetchOptions: RequestInit = {
    headers,
    method: req.method,
    body: req.body,
    // to fix #2485: https://stackoverflow.com/questions/55920957/cloudflare-worker-typeerror-one-time-use-body
    redirect: "manual",
    // @ts-ignore
    duplex: "half",
    signal: controller.signal,
  };

  const timeoutId = setTimeout(
    () => {
      controller.abort();
    },
    10 * 60 * 1000,
  );

  try {
    const res = await fetch(fetchUrl, fetchOptions);
    // to prevent browser prompt for credentials
    const newHeaders = new Headers(res.headers);
    newHeaders.delete("www-authenticate");
    // to disable nginx buffering
    newHeaders.set("X-Accel-Buffering", "no");

    // The latest version of the OpenAI API forced the content-encoding to be "br" in json response
    // So if the streaming is disabled, we need to remove the content-encoding header
    // Because Vercel uses gzip to compress the response, if we don't remove the content-encoding header
    // The browser will try to decode the response with brotli and fail
    newHeaders.delete("content-encoding");

    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers: newHeaders,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}
