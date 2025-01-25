import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "var(--landing-bg-color)",
          dark: "#13151a",
        },
        foreground: {
          DEFAULT: "var(--landing-heading-text-color)",
          dark: "#e9eaeb",
        },
        primary: {
          DEFAULT: "var(--primary-btn-bg-color)",
          foreground: "var(--primary-btn-text-color)",
          hover: "var(--primary-btn-bg-hover-color)",
        },
        secondary: {
          DEFAULT: "var(--secondary-btn-bg-color)",
          foreground: "var(--secondary-btn-text-color)",
          hover: "var(--secondary-btn-bg-hover-color)",
          border: "var(--secondary-btn-border-color)",
          "border-hover": "var(--secondary-btn-border-hover-color)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary-btn-bg-color)",
          foreground: "var(--tertiary-btn-text-color)",
          hover: "var(--tertiary-btn-bg-hover-color)",
          border: "var(--tertiary-btn-border-color)",
          "border-hover": "var(--tertiary-btn-border-hover-color)",
        },
        card: {
          DEFAULT: "var(--landing-card-bg-color)",
          foreground: "var(--landing-card-heading-color)",
          border: "var(--landing-card-border-color)",
          dark: {
            DEFAULT: "#1d1f27",
            foreground: "#e9eaeb",
            border: "#2f323d",
          },
        },
        muted: {
          DEFAULT: "var(--landing-description-text-color)",
          foreground: "var(--landing-description-text-color)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
        shimmer: "shimmer 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;