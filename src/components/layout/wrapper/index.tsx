"use client";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "../theme-provider";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Navbar />
      <div className="max-w-7xl mx-auto p-5">{children}</div>
    </ThemeProvider>
  );
};
export default Wrapper;
