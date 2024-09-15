import createMiddleware from "next-intl/middleware";
import { locales } from "./lib/config";

export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  // matcher: ["/", "/(id)/:path*"],
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
