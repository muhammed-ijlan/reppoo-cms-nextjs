import { ReactNode } from "react";
import { manrope } from "@/theme/fonts";
import "../globals.css";

import Navbar from "@/app/(root)/components/navbar/Navbar";
import Footer from "@/app/(root)/components/footer/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
