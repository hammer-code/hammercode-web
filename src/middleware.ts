import createMiddleware from "next-intl/middleware";
// import { locales } from "./lib/config";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-next-intl-locale") || "id";

  const handleI18nRouting = createMiddleware({
    locales: ["en", "id"],
    defaultLocale,
    localePrefix: "as-needed",
    alternateLinks: false,
  });
  const response = handleI18nRouting(request);

  response.headers.set("x-next-intl-locale", defaultLocale);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
