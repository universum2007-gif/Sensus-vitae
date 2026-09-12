import { NextResponse, type NextRequest } from "next/server";
import { isLanguage } from "@/lib/site-content";

export function proxy(request: NextRequest) {
  const routeLanguage = request.nextUrl.pathname.split("/")[1];
  const language = isLanguage(routeLanguage) ? routeLanguage : "ru";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-sensus-vitae-language", language);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
