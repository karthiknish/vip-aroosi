"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import FloatingSymbols from "./FloatingSymbols";

// Floating Dots Component
const FloatingDots = () => {
  const dots = Array.from({ length: 35 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const duration = 20 + Math.random() * 20;
        const delay = Math.random() * 10;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              filter: "blur(2px) brightness(1.3)",
              boxShadow: "0 0 8px rgba(255,255,255,0.7)",
            }}
            animate={{
              x: [0, Math.random() * 12 - 6, 0],
              y: [0, Math.random() * 12 - 6, 0],
              opacity: [0.3, 0.7, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Floating Animations */}
      {/* <FloatingDots />
      <FloatingHearts />
      <FloatingSymbols /> */}

      {/* Navigation Bar */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm py-4 px-6"></nav> */}

      {/* Hero Content */}
      <div className="relative z-10 flex items-center h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-serif text-white text-4xl lg:text-6xl font-normal tracking-normal leading-relaxed lg:leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              No. 1 Matchmaking Service <em>for Elites</em>
            </motion.h1>

            <motion.p
              className="font-sans text-gray-200 text-lg lg:text-xl font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              5× higher success rate · Assured meetings · Top consultants
            </motion.p>

            <motion.button
              className="bg-white text-gray-900 font-sans font-medium px-6 py-3 rounded-lg text-base hover:bg-gray-100 hover:scale-105 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
