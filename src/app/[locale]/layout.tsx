/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Sora } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/layout/wrapper";
import { locales } from "@/lib/config";
import { notFound } from "next/navigation";
const sora = Sora({ subsets: ["latin"] });

type Props = {
  params: {
    locale: string;
  };
  children: React.ReactNode;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleRootLayout({ children, params: { locale } }: Readonly<Props>) {
  if (!locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/assets/icons/ic_hmc-dark.svg" sizes="any" />
      </head>
      <body className={`${sora.className} pt-8`}>
        <NextIntlClientProvider messages={messages}>
          <Wrapper>{children}</Wrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
