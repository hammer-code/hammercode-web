import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "id" as const;
export const locales = ["en", "id"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/about": {
    en: "/about",
    id: "/about",
  },
  "/events": {
    en: "/events",
    id: "/events",
  },
  "/contact": {
    en: "/contact",
    id: "/contact",
  },
} satisfies Pathnames<Locales>;

export const localePrefix: LocalePrefix<Locales> = "as-needed" satisfies LocalePrefix;
