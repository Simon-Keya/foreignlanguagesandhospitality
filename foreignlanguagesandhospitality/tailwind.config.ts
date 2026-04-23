import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

// ✅ Extend Tailwind type to include daisyui
type DaisyUIConfig = Config & {
  daisyui?: {
    themes?: Record<string, unknown>[];
  };
};

const config: DaisyUIConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A2540",
          dark: "#051B2E",
          light: "#0D3060",
        },
        secondary: {
          DEFAULT: "#E30613",
          dark: "#B8040F",
          light: "#FF1A26",
        },
        accent: {
          DEFAULT: "#F2C12C",
          dark: "#D4A520",
          light: "#F7D45A",
        },
      },

      backgroundImage: {
        tribar:
          "linear-gradient(90deg, #0A2540 0%, #0A2540 40%, #E30613 40%, #E30613 70%, #F2C12C 70%, #F2C12C 100%)",
        "navy-gradient":
          "linear-gradient(160deg, #051B2E 0%, #0A2540 100%)",
      },
    },
  },

  plugins: [daisyui, typography],

  daisyui: {
    themes: [
      {
        institute: {
          primary: "#0A2540",
          secondary: "#E30613",
          accent: "#F2C12C",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};

export default config;