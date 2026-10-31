import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
import {
  ACCESS_CODE_PREFIX,
  ModelProvider,
  MISTRAL_BASE_URL,
} from "../constant";

export async function handle(
  req: NextRequest,
  { params }: { params: { path: string[] } },
) {
  const result = auth(req, ModelProvider.Mistral);
  if (result.error) return NextResponse.json(result, { status: 401 });
  const authorization = req.headers.get("Authorization") ?? "";
  if (
    !authorization ||
    authorization.replace(/^Bearer\s+/i, "").startsWith(ACCESS_CODE_PREFIX)
  ) {
    return NextResponse.json(
      { error: { message: "Configure your Mistral API Key in Settings" } },
      { status: 401 },
    );
  }
  const path = params.path.join("/");
  if (!["v1/chat/completions", "v1/models"].includes(path)) {
    return NextResponse.json(
      { error: { message: "Unsupported Mistral endpoint" } },
      { status: 404 },
    );
  }
  try {
    const res = await fetch(`${MISTRAL_BASE_URL}/${path}`, {
      method: req.method,
      body: req.body,
      redirect: "manual",
      signal: req.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      // @ts-ignore Node fetch requires duplex when forwarding a stream.
      duplex: "half",
    });
    return new Response(res.body, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("Content-Type") ?? "application/json",
        "Cache-Control": "no-store",
        "X-Accel-Buffering": "no",
      },
    });
  } catch {
    return NextResponse.json(
      { error: { message: "Mistral connection failed" } },
      { status: 502 },
    );
  }
}
