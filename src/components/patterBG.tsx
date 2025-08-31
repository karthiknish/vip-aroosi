import React, { useMemo } from "react";

const PatternBG = () => {
  const hearts = useMemo(() => {
    const rows = 6;
    const cols = 6;
    const items: {
      id: number;
      size: number;
      left: number;
      top: number;
      rotate: number;
    }[] = [];

    // Base grid hearts
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const id = r * cols + c;
        const size = Math.random() * 40 + 20;
        const rotate = Math.random() * 360;
        const leftBase = (c + 0.5) * (100 / cols);
        const topBase = (r + 0.5) * (100 / rows);
        const left = leftBase + (Math.random() * 12 - 6);
        const top = topBase + (Math.random() * 12 - 6);

        items.push({ id, size, left, top, rotate });
      }
    }

    // Extra edge hearts
    const extraEdgeCount = 20; // tweak number of edge hearts
    for (let i = 0; i < extraEdgeCount; i++) {
      const size = Math.random() * 30 + 15;
      const rotate = Math.random() * 360;

      // Bias: randomly choose edge (top, bottom, left, right)
      const edge = Math.floor(Math.random() * 4);
      let left = 0;
      let top = 0;

      if (edge === 0) {
        // top edge
        left = Math.random() * 100;
        top = Math.random() * 8; // 0–8%
      } else if (edge === 1) {
        // bottom edge
        left = Math.random() * 100;
        top = 92 + Math.random() * 8; // 92–100%
      } else if (edge === 2) {
        // left edge
        left = Math.random() * 8;
        top = Math.random() * 100;
      } else {
        // right edge
        left = 92 + Math.random() * 8;
        top = Math.random() * 100;
      }

      items.push({ id: rows * cols + i, size, left, top, rotate });
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
