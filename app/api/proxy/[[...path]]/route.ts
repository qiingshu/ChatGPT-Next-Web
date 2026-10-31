import { NextRequest } from "next/server";
import { handle as proxyHandler } from "../../proxy";

async function handle(req: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  return proxyHandler(req, { params: { path } });
}
export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const HEAD = handle;
export const OPTIONS = handle;
export const runtime = "nodejs";
