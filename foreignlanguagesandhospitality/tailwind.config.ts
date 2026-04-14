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
        primary: {
          DEFAULT: "#0A2540",   // Navy Blue
          dark: "#051B2E",
        },
        secondary: {
          DEFAULT: "#E30613",   // Red
        },
        accent: {
          DEFAULT: "#F2C12C",   // Gold
        },
        neutral: {
          light: "#F8F9FA",
          dark: "#1F2937",
        }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        institute: {
          "primary": "#0A2540",      // Navy Blue
          "secondary": "#E30613",    // Red
          "accent": "#F2C12C",       // Gold
          "neutral": "#F8F9FA",
          "base-100": "#FFFFFF",     // White background
          "base-200": "#F1F5F9",
          "base-300": "#E2E8F0",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#E30613",

          "--rounded-box": "0.8rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
  },
};

export default config;