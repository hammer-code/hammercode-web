/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from "@/features/home";
import { locales } from "@/lib/config";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  params: {
    locale: string;
  };
};

export default function HomePage({ params: { locale } }: Props) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);

  return <Home />;
}
