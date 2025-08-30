import React, { useMemo } from "react";

const PatternBG = () => {
  const hearts = useMemo(() => {
    const rows = 6; // increased
    const cols = 6; // increased
    const total = rows * cols;
    const items: {
      id: number;
      size: number;
      left: number;
      top: number;
      rotate: number;
    }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const id = r * cols + c;
        const size = Math.random() * 40 + 20;
        const rotate = Math.random() * 360;

        // Base position is grid cell center
        const leftBase = (c + 0.5) * (100 / cols);
        const topBase = (r + 0.5) * (100 / rows);

        // Add small random offset (so it’s not too rigid)
        const left = leftBase + (Math.random() * 12 - 6); // ±6%
        const top = topBase + (Math.random() * 12 - 6); // ±6%

        items.push({ id, size, left, top, rotate });
      }
    }
    return items;
  }, []);

  return (
    <div className="w-full h-screen bg-white relative overflow-hidden">
      {hearts.map(({ id, size, left, top, rotate }) => (
        <svg
          key={id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF3C68"
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
      ))}
    </div>
  );
};

export default PatternBG;
