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

        {/* SEO & Social Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="VIP Aroosi – the premier Afghan matchmaking concierge for elites worldwide."
        />
        <meta
          name="keywords"
          content="Afghan matchmaking, VIP matrimony, elite dating, concierge marriage service"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VIP Aroosi | Elite Afghan Matchmaking"
        />
        <meta
          property="og:description"
          content="Experience white-glove matrimonial concierge with the global leader in Afghan matchmaking."
        />
        <meta property="og:image" content="/images/og-vip-aroosi.jpg" />
        <meta property="og:url" content="https://vip.aroosi.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VIP Aroosi | Elite Afghan Matchmaking"
        />
        <meta
          name="twitter:description"
          content="White-glove matrimonial concierge built on Aroosi's award-winning platform."
        />
        <meta name="twitter:image" content="/images/og-vip-aroosi.jpg" />
      </head>
      <body className={`${nunito.variable}`}>
        {/* Site Nav */}
        <header className="w-full bg-primary-dark shadow-sm fixed top-0 left-0 z-50 py-4">
          <div className="max-w-6xl mx-auto text-center">
            <a
              href="/"
              className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide"
            >
              Aroosi
              <span className="text-white subscript text-sm font-sans">
                VIP
              </span>
            </a>
          </div>
        </header>

        {/* Offset for fixed header to avoid overlap */}
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
} 