import React from "react";

type PatternBG2Props = {
  className?: string;
  cell?: number; // size of each rhombus cell in px
  strokeWidth?: number; // thickness of the net lines
  strokeOpacity?: number; // transparency of the net
};

const PatternBG2: React.FC<PatternBG2Props> = ({
  className = "",
  cell = 32,
  strokeWidth = 1,
  strokeOpacity = 0.18,
}) => {
  const pad = 1;

  return (
    <div
      className={`absolute inset-0 bg-primary ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Rhombus pattern */}
          <pattern
            id="rhombi-pattern"
            width={cell}
            height={cell}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${cell / 2} ${pad}
                 L ${cell - pad} ${cell / 2}
                 L ${cell / 2} ${cell - pad}
                 L ${pad} ${cell / 2} Z`}
              fill="none"
              stroke="black"
              strokeOpacity={strokeOpacity}
              strokeWidth={strokeWidth}
              shapeRendering="crispEdges"
            />
          </pattern>

          {/* Radial fade mask */}
          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="url(#fade-gradient)" />
          </mask>

          <radialGradient id="fade-gradient" cx="50%" cy="50%" r="70%">
            <stop offset="60%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>

          {/* Optional soft vignette overlay */}
          <radialGradient id="soft-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="70%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.06" />
          </radialGradient>
        </defs>

        {/* Rhombus pattern with radial fade */}
        <rect
          width="100%"
          height="100%"
          fill="url(#rhombi-pattern)"
          mask="url(#fade-mask)"
        />

        {/* Soft vignette overlay */}
        <rect width="100%" height="100%" fill="url(#soft-vignette)" />
      </svg>
    </div>
  );
};

export default PatternBG2;
