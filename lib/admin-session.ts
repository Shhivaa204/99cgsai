import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
export const ADMIN_COOKIE = "admin_session";
export const SESSION_SECONDS = 60 * 60 * 8;
const username = () => process.env.ADMIN_USERNAME || "test";
const password = () => process.env.ADMIN_PASSWORD || "test";
const secret = () => process.env.ADMIN_SESSION_SECRET || "99cgs-test-secret-change-me";
const digest = (v: string) => createHash("sha256").update(v).digest();
const same = (a: string, b: string) => timingSafeEqual(digest(a), digest(b));
export function checkCredentials(u: unknown, p: unknown) {
  if (typeof u !== "string" || typeof p !== "string") return false;
  return same(u.trim(), username()) && same(p, password());
}
const b64 = (s: string) => Buffer.from(s).toString("base64url");
const sign = (body: string) => createHmac("sha256", secret()).update(body).digest("base64url");
export function createSessionToken(user: string) {
  const body = b64(JSON.stringify({ u: user, exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS }));
  return `${body}.${sign(body)}`;
}
export function verifySessionToken(token: string | undefined | null): { user: string } | null {
  if (!token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = sign(body);
  if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const data = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (typeof data.u !== "string" || typeof data.exp !== "number" || data.exp < Date.now() / 1000) return null;
    return { user: data.u };
  } catch { return null; }
}
export async function getAdminSession() {
  const jar = await cookies();
  return verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
}