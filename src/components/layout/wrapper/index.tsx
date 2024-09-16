"use client";

import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "../theme-provider";
import Footer from "@/components/common/footer/Footer";
import { useParams, usePathname } from "next/navigation";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const pathname = usePathname();
  const isCertificateDetailPage = !!params?.slug && pathname.includes("certificates");

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {isCertificateDetailPage ? (
        children
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};
export default Wrapper;
