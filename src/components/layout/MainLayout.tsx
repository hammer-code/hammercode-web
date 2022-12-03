import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import React from 'react';

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
