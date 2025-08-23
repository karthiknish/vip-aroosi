import "./globals.css";
import type { ReactNode } from "react";
import ToasterProvider from "../components/ToasterProvider";
import { Nunito_Sans, Lora } from "next/font/google";

// Load Nunito Sans from Google Fonts and attach to CSS variable
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-family-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-family-serif",
  weight: ["400", "700"],
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
      <body className={`${lora.variable}`}>
        {/* Site Nav */}
        <header className="w-full bg-gradient-to-r from-primary-dark via-purple-900 to-primary-dark shadow-2xl fixed top-0 left-0 z-50 py-4 backdrop-blur-md border-b border-white/10">
          {/* Luxury animated background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating diamonds */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rotate-45 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
            
            {/* Luxury shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse" 
                 style={{ animationDuration: '4s' }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
            <a
              href="/"
              className="group inline-block text-6xl md:text-5xl font-lora font-black tracking-widest transform hover:scale-105 transition-all duration-500"
              style={{
                letterSpacing: '0.15em'
              }}
            >
              <span className="relative text-white drop-shadow-2xl" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(139,92,246,0.6)' }}>
                AROOSI
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-30" />
              </span>
              <span className="relative ml-4 text-2xl md:text-xl font-lora font-bold text-yellow-300 drop-shadow-lg">
                VIP
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full animate-ping" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full" />
              </span>
            </a>
          </div>
          
          {/* Bottom luxury border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </header>

        {/* Offset for fixed header to avoid overlap */}
        <div className="pt-24">{children}</div>
        <ToasterProvider />
      </body>
    </html>
  );
}
