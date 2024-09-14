"use client";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "../theme-provider";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};
export default Wrapper;
