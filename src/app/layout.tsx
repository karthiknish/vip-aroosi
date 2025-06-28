import "./globals.css";
import type { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";

// Load Nunito Sans from Google Fonts and attach to CSS variable
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-family-sans" });

export const metadata = {
  title: "VIP Aroosi Marriage",
  description: "Exclusive matrimonial service",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
} 