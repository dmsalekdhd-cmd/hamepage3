import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 황금 아라비안 팔레트
        gold: {
          50:  "#fdf9ed",
          100: "#faf0c9",
          200: "#f5de8e",
          300: "#f0c853",
          400: "#e9b024",
          500: "#c8962a",
          600: "#a67520",
          700: "#855a1c",
          800: "#64431a",
          900: "#4a3118",
        },
        // 열대 하늘 / 바다색
        sky: {
          50:  "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // 터콰이즈 물색
        teal: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        // 모래색 (아라비안/열대)
        sand: {
          50:  "#fffbf0",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        // 열대 초록 (야자수)
        palm: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        // 아라비안 퍼플 포인트
        arabian: {
          50:  "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
      },
      fontFamily: {
        arabic:  ["Cinzel Decorative", "serif"],
        display: ["Cinzel", "serif"],
        body:    ["Noto Sans KR", "sans-serif"],
      },
      animation: {
        "float":       "float 5s ease-in-out infinite",
        "shimmer":     "shimmer 2s linear infinite",
        "wave-move":   "waveMove 8s linear infinite",
        "sway":        "sway 4s ease-in-out infinite",
        "fade-in-up":  "fadeInUp 0.7s ease-out forwards",
        "sun-pulse":   "sunPulse 3s ease-in-out infinite",
        "sparkle":     "sparkle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        waveMove: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%":      { transform: "rotate(4deg)" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sunPulse: {
          "0%, 100%": { boxShadow: "0 0 30px 10px rgba(251,191,36,0.3), 0 0 60px 20px rgba(251,191,36,0.15)" },
          "50%":      { boxShadow: "0 0 50px 20px rgba(251,191,36,0.5), 0 0 90px 40px rgba(251,191,36,0.25)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.3)" },
        },
      },
      boxShadow: {
        gold:     "0 4px 30px rgba(200,150,42,0.35)",
        "gold-lg":"0 8px 50px rgba(200,150,42,0.45)",
        teal:     "0 4px 30px rgba(20,184,166,0.35)",
        sky:      "0 4px 30px rgba(14,165,233,0.35)",
        card:     "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-lg":"0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
