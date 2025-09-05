"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-black overflow-hidden mt-12">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-[80vh] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="space-y-6"
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
              className="font-sans text-gray-200 text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto"
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
