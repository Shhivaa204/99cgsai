import { NextResponse, type NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== "/admin/login" && !request.cookies.get("admin_session")) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/admin/:path*"] };