// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Let static files pass through
  if (pathname.startsWith("/sitemap.xml") || pathname.startsWith("/sitemap-")) {
    return NextResponse.next();
  }
}
