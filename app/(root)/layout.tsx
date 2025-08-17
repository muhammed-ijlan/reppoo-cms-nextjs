import { ReactNode } from "react";
import "../globals.css";

import Navbar from "@/app/(root)/components/navbar/Navbar";
import Footer from "@/app/(root)/components/footer/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
