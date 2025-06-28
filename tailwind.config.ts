import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8b5cf6", // purple-500
          light: "#c4b5fd", // purple-300
          dark: "#5b21b6", // purple-700
        },
        secondary: {
          DEFAULT: "#5F92AC",
          light: "#A2C4DB",
          dark: "#3E647A",
        },
        accent: {
          DEFAULT: "#D6B27C",
          light: "#EDD6A4",
          dark: "#B28E5F",
        },
        base: {
          DEFAULT: "#F9F7F5",
          light: "#FFFFFF",
          dark: "#E7E3DF",
        },
        neutral: {
          DEFAULT: "#4A4A4A",
          light: "#7A7A7A",
        },
      },
      fontFamily: {
        sans: ["var(--font-family-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [animate],
} satisfies Config; 