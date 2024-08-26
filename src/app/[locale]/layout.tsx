import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Sora } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/layout/wrapper";
const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Hammercode!",
  description: "Hammercode is a community based in Palu, Indonesia",
};

export default async function LocaleRootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/assets/icons/ic_hmc-dark.svg" sizes="any" />
      </head>
      <body className={sora.className}>
        <NextIntlClientProvider messages={messages}>
          <Wrapper>{children}</Wrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
