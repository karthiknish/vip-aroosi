import "./globals.css";
import type { ReactNode } from "react";
import { Nunito_Sans, Boldonse } from "next/font/google";

// Load Nunito Sans from Google Fonts and attach to CSS variable
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-family-sans",
});
const boldonse = Boldonse({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "VIP Aroosi Marriage",
  description: "Exclusive matrimonial service",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${nunito.variable} ${boldonse.variable}`}>
        {children}
      </body>
    </html>
  );
} 