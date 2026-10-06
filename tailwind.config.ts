import type { Config } from "tailwindcss";

// Preflight is disabled so the hand-tuned pixel-art CSS in globals.css renders exactly as designed.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        dino: { DEFAULT: "#45c14a", neon: "#7dff6a", grass: "#3f9e3a", earth: "#5a3a22", beige: "#f0e2bd", gold: "#ffc83d", ink: "#06100a", forest: "#0b1a12" },
      },
      fontFamily: { pixel: ["var(--font-pixel)", "monospace"], body: ["var(--font-body)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
