import { ReactNode } from "react";
import { manrope } from "@/theme/fonts";
import "./globals.css";

import ThemeClientWrapper from "../theme/ThemeClientWrapper";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className={manrope.className}>
      <body suppressHydrationWarning>
        <ThemeClientWrapper>{children}</ThemeClientWrapper>
      </body>
    </html>
  );
}
