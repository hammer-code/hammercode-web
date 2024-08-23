import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/layout/wrapper";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Hammercode!",
  description: "Hammercode is a community based in Palu, Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/ic_hmc-dark.svg" sizes="any" />
      </head>
      <body className={sora.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
