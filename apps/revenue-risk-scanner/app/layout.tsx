import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Revenue Risk Scanner",
  description: "URL-based revenue risk scanner with crawling, trust-signal extraction, and Revenue Risk Scoring.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
