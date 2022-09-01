import React from "react";

import Header from "components/header";
import Footer from "components/footer";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
