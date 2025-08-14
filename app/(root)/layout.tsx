import { ReactNode } from "react";
import { manrope } from "@/theme/fonts";
import "../globals.css";

import ThemeClientWrapper from "../../theme/ThemeClientWrapper";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <ThemeClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeClientWrapper>
      </body>
    </html>
  );
}
