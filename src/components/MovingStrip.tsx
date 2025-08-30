import React from "react";

interface MovingStripProps {
  items: string[];
  color?: string; // default #BE185D
  rotation?: number; // default -12
  speed?: number; // seconds for animation
  direction?: "left" | "right"; // scroll direction
}

const MovingStrip: React.FC<MovingStripProps> = ({
  items,
  color = "#BE185D",
  rotation = -12,
  speed = 15,
  direction = "left",
}) => {
  const looped = [...items, ...items];

  return (
    <div className="relative w-full h-full">
      {/* Rotated background strip */}
      <div
        className="absolute -left-1/4 w-[150%] flex items-center h-10 top-1/2 -translate-y-1/2 overflow-hidden"
        style={{
          backgroundColor: color,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className={`flex gap-16 text-white text-lg font-bold whitespace-nowrap px-4 animate-marquee`}
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {looped.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MovingStrip;
