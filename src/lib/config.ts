import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "id"] as const;

export const pathnames = {
  "/": "/",
  "/about": {
    en: "/about",
    id: "/tentang",
  },
  "/events": {
    en: "/events",
    id: "/acara",
  },
  "/contact": {
    en: "/contact",
    id: "/kontak",
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = "always";
