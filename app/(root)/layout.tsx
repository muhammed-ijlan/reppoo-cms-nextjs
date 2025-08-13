import { ReactNode } from "react";
import { manrope } from "@/theme/fonts";
 import "../globals.css";

import ThemeClientWrapper from "../../theme/ThemeClientWrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <ThemeClientWrapper>
          {children}
        </ThemeClientWrapper>
      </body>
    </html>
  );
}
 
