"use client";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "../theme-provider";
import Footer from "@/components/common/footer/Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
export default Wrapper;
