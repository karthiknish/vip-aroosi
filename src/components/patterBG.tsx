import React from "react";

const PatternBG = () => {
  return (
    <div className="w-full h-screen bg-white relative overflow-hidden">
      {/* Repeating pattern hearts */}
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 40 + 20; // heart size (20px – 60px)
        const left = Math.random() * 100; // random X%
        const top = Math.random() * 100; // random Y%
        const rotate = Math.random() * 360; // random rotation

        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF3C68" // pink outline
            strokeWidth="2"
            className="absolute opacity-60"
            style={{
              width: size * 2,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            <path
              fill="transparent"
              d="M12 21s-6.5-4.35-9.33-8.28C-0.67 8.44 2.41 3 7.5 3c2.1 0 4.09 1.07 5.5 2.72C14.41 4.07 16.4 3 18.5 3c5.09 0 8.17 5.44 4.83 9.72C18.5 16.65 12 21 12 21z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default PatternBG;
