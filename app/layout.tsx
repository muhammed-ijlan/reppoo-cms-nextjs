import { ReactNode } from "react";
import { manrope } from "@/theme/fonts";
import "./globals.css";

import ThemeClientWrapper from "../theme/ThemeClientWrapper";

export const metadata = {
  title: "Reppoo App",
  description: "This is the description of my website.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className={manrope.className}>
      <title>Reppoo App</title>
      <body suppressHydrationWarning>
        <ThemeClientWrapper>{children}</ThemeClientWrapper>
      </body>
    </html>
  );
}
