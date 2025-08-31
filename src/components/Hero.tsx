import { motion } from "framer-motion";

// Floating Dots Component with Glow
const FloatingDots = () => {
  const dots = Array.from({ length: 35 }); // richness

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const duration = 20 + Math.random() * 20; // 👈 slower (20s - 40s)
        const delay = Math.random() * 10; // random stagger

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70 will-change-transform"
            style={{
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              filter: "blur(2px) brightness(1.3)",
              boxShadow: "0 0 8px rgba(255,255,255,0.7)",
            }}
            animate={{
              x: [0, Math.random() * 12 - 6, 0], // 👈 subtle slow drift
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
    <section className="relative bg-[url('https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MjA2MTE0NDEyNDMwMzY5OTgx/brighter-side-of-afghanistan.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-4 py-20">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 backdrop-brightness-75 backdrop-blur-sm" />

      {/* 🔥 Radial Black Fade on Edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 70%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Floating Dots */}
      <FloatingDots />

      <motion.div
        className="relative max-w-3xl space-y-6 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ lineHeight: "1.7" }}
        >
          No. 1 Matchmaking Service for Elites
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          5× higher success rate · Assured meetings · Top consultants
        </motion.p>
        <motion.a
          href="#enquiry"
          className="group relative inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 overflow-hidden shadow-lg shadow-yellow-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]">
            Get a Free Consultation
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-yellow-400/30 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
