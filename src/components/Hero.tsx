import { motion } from "framer-motion";

// Floating Dots Component with Glow (more at bottom)
const FloatingDots = () => {
  const dots = Array.from({ length: 35 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = `${Math.random() * 100}%`;

        // bias: 70% chance neeche half me
        const top =
          Math.random() < 0.7
            ? `${50 + Math.random() * 50}%` // bottom half
            : `${Math.random() * 100}%`; // anywhere

        const duration = 6 + Math.random() * 8;
        const delay = Math.random() * 4;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70 will-change-transform"
            style={{
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              filter: "blur(2px) brightness(1.3)", // glow effect
              boxShadow: "0 0 8px rgba(255,255,255,0.7)", // soft outer glow
            }}
            animate={{
              x: [0, Math.random() * 25 - 12, 0],
              y: [0, Math.random() * 25 - 12, 0],
              opacity: [0.3, 0.8, 0.4],
              scale: [1, 1.3, 1],
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
    <section className="relative bg-[url('https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MjA2MTE0NDEyNDMwMzY5OTgx/brighter-side-of-afghanistan.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center min-h-[84vh] px-4 py-20">
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 backdrop-brightness-75 backdrop-blur-sm" />

      {/* Floating Dots with Glow (bottom biased) */}
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
          className="group relative inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-300 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Get a Free Consultation</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
