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
        // Single source of truth — no brand.* duplication
        primary: {
          DEFAULT: "#0A2540",
          dark:    "#051B2E",
          light:   "#0D3060",
        },
        secondary: {
          DEFAULT: "#E30613",
          dark:    "#B8040F",
          light:   "#FF1A26",
        },
        accent: {
          DEFAULT: "#F2C12C",
          dark:    "#D4A520",
          light:   "#F7D45A",
        },
        neutral: {
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },

      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        // xs through 2xl covered by Tailwind defaults
        "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.75rem" }],
        "5xl": ["3rem",     { lineHeight: "3.5rem"  }],
        "6xl": ["3.75rem",  { lineHeight: "4.25rem" }],
        "7xl": ["4.5rem",   { lineHeight: "5rem"    }],
      },

      letterSpacing: {
        eyebrow: "0.18em",
      },

      spacing: {
        // Only the values your components actually reference
        "4.5": "1.125rem",
        "13":  "3.25rem",
        "18":  "4.5rem",
        "22":  "5.5rem",
        "26":  "6.5rem",
      },

      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      boxShadow: {
        // Keyed to navy — intentional, not vanity
        sm:    "0 1px 3px 0 rgb(10 37 64 / 0.08)",
        md:    "0 6px 16px -2px rgb(10 37 64 / 0.10)",
        lg:    "0 12px 28px -4px rgb(10 37 64 / 0.12)",
        xl:    "0 20px 40px -6px rgb(10 37 64 / 0.14)",
        "2xl": "0 32px 56px -8px rgb(10 37 64 / 0.18)",
        glow:  "0 0 24px 0 rgb(242 193 44 / 0.30)",
        inner: "inset 0 2px 4px 0 rgb(10 37 64 / 0.06)",
        none:  "none",
      },

      backgroundImage: {
        // Every one of these is used in the component files
        "tribar":        "linear-gradient(90deg, #0A2540 0%, #0A2540 40%, #E30613 40%, #E30613 70%, #F2C12C 70%, #F2C12C 100%)",
        "navy-gradient": "linear-gradient(160deg, #051B2E 0%, #0A2540 100%)",
        "hero-overlay":  "linear-gradient(135deg, rgba(10,37,64,0.92) 0%, rgba(5,27,46,0.75) 100%)",
        "card-hover":    "linear-gradient(135deg, #0A2540 0%, #051B2E 100%)",
        "gold-shimmer":  "linear-gradient(90deg, #D4A520 0%, #F2C12C 50%, #F7D45A 100%)",
        "dot-pattern":   "radial-gradient(circle, #0A2540 1px, transparent 1px)",
        "grid-pattern":  "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
      },

      transitionDuration: {
        "350": "350ms",
        "400": "400ms",
        "600": "600ms",
      },

      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(242,193,44,0)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(242,193,44,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },

      animation: {
        "fade-in":       "fadeIn 0.5s ease-out forwards",
        "fade-up":       "fadeUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "scale-in":      "scaleIn 0.4s ease-out forwards",
        "pulse-gold":    "pulseGold 2s ease-in-out infinite",
        "float":         "float 4s ease-in-out infinite",
      },

      screens: {
        xs: "480px",
      },

      maxWidth: {
        "8xl":  "88rem",
        "prose":"68ch",
      },

      typography: {
        DEFAULT: {
          css: {
            color: "#374151",
            lineHeight: "1.75",
            a: {
              color: "#0A2540",
              fontWeight: "500",
              "&:hover": { color: "#E30613" },
            },
            h1: { color: "#0A2540", fontWeight: "900" },
            h2: { color: "#0A2540", fontWeight: "700" },
            h3: { color: "#0A2540", fontWeight: "600" },
            strong: { color: "#0A2540", fontWeight: "600" },
            blockquote: {
              borderLeftColor: "#F2C12C",
              borderLeftWidth: "4px",
              fontStyle: "italic",
              color: "#374151",
            },
            "ul > li::marker": { color: "#E30613" },
            "ol > li::marker": { color: "#0A2540", fontWeight: "600" },
            hr: { borderColor: "#E2E8F0" },
          },
        },
      },
    },
  },

  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],

  daisyui: {
    themes: [
      {
        institute: {
          "primary":           "#0A2540",
          "primary-content":   "#FFFFFF",
          "secondary":         "#E30613",
          "secondary-content": "#FFFFFF",
          "accent":            "#F2C12C",
          "accent-content":    "#0A2540",
          "neutral":           "#1F2937",
          "neutral-content":   "#F9FAFB",
          "base-100":          "#FFFFFF",
          "base-200":          "#F1F5F9",
          "base-300":          "#E2E8F0",
          "base-content":      "#1F2937",
          "info":              "#3ABFF8",
          "info-content":      "#FFFFFF",
          "success":           "#36D399",
          "success-content":   "#FFFFFF",
          "warning":           "#F2C12C",
          "warning-content":   "#0A2540",
          "error":             "#E30613",
          "error-content":     "#FFFFFF",

          "--rounded-box":     "1rem",
          "--rounded-btn":     "0.5rem",
          "--rounded-badge":   "1.9rem",
          "--animation-btn":   "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.97",
          "--border-btn":      "1px",
          "--tab-radius":      "0.5rem",
        },
      },
    ],
    base:   true,
    styled: true,
    utils:  true,
    logs:   false,
  },
};

export default config;