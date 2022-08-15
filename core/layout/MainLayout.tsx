import Header from "@core/components/Header";
import Footer from "@core/components/Footer";
import React from "react";

export default function MainLayout({ children }: { children?: React.ReactNode}) {
  return (
    <>
    <Header />
      {children}
    <Footer />
    </>
  );
}
