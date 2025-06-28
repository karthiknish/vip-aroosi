import "./globals.css";
import type { ReactNode } from "react";
import { Nunito_Sans } from "next/font/google";

// Load Nunito Sans from Google Fonts and attach to CSS variable
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-family-sans",
});

export const metadata = {
  title: "VIP Aroosi Marriage",
  description: "Exclusive matrimonial service",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${nunito.variable}`}>{children}</body>
    </html>
  );
} 