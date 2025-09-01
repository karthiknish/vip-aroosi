import { motion } from "framer-motion";
import { FaHeart, FaRing, FaGem } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

const symbols = [
  { Icon: FaHeart, color: "#ff4d6d" }, // ❤️ Romantic red
  { Icon: FaRing, color: "#ffd700" }, // 💍 Golden rings
  { Icon: GiRose, color: "#ff3366" }, // 🌹 Rose pink
  { Icon: FaGem, color: "#00c3ff" }, // 💎 Diamond blue
];

const FloatingSymbols = () => {
  const items = Array.from({ length: 22 }); // thoda zyada richness

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((_, i) => {
        const { Icon, color } =
          symbols[Math.floor(Math.random() * symbols.length)];
        const size = 20 + Math.random() * 35;

        // 👇 Left aur Right ke liye scatter ko thoda andar le aaya
        const left =
          i % 2 === 0
            ? `${5 + Math.random() * 25}%` // Left side (pehle 0-18% tha, ab 5-30%)
            : `${70 + Math.random() * 25}%`; // Right side (pehle 82-100%, ab 70-95%)

        const top = `${Math.random() * 100}%`;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 10;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left,
              top,
              fontSize: `${size}px`,
              color,
              filter: `drop-shadow(0 0 8px ${color}90)`,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 12 - 6, 0],
              opacity: [0.4, 0.9, 0.5],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingSymbols;
