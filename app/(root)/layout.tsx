import { ReactNode } from "react";
import { manrope } from "@/theme/fonts";
 import "../globals.css";

import ThemeClientWrapper from "../../theme/ThemeClientWrapper";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <ThemeClientWrapper>
          <Navbar/>
          {children}
        </ThemeClientWrapper>
      </body>
    </html>
  );
}
 
