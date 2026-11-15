import { NextResponse } from "next/server";
import { ADMIN_COOKIE, SESSION_SECONDS, checkCredentials, createSessionToken } from "@/lib/admin-session";
const fails = new Map<string, { n: number; t: number }>();
const WINDOW = 10 * 60 * 1000;
const MAX = 8;
export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "local").split(",")[0].trim();
  const now = Date.now();
  const rec = fails.get(ip);
  if (rec && now - rec.t < WINDOW && rec.n >= MAX) return NextResponse.json({ error: "Too many attempts." }, { status: 429 });
  const body = await req.json().catch(() => null);
  if (!checkCredentials(body?.username, body?.password)) {
    fails.set(ip, { n: rec && now - rec.t < WINDOW ? rec.n + 1 : 1, t: rec && now - rec.t < WINDOW ? rec.t : now });
    return NextResponse.json({ error: "Incorrect username or password." }, { status: 401 });
  }
  fails.delete(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, createSessionToken(String(body.username).trim()), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: SESSION_SECONDS });
  return res;
}