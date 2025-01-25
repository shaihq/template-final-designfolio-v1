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
        border: "var(--input-border-color)",
        input: "var(--input-bg-color)",
        ring: "var(--input-border-focus-color)",
        background: "var(--landing-bg-color)",
        foreground: "var(--landing-heading-text-color)",
        primary: {
          DEFAULT: "var(--primary-btn-bg-color)",
          foreground: "var(--primary-btn-text-color)",
        },
        secondary: {
          DEFAULT: "var(--secondary-btn-bg-color)",
          foreground: "var(--secondary-btn-text-color)",
        },
        card: {
          DEFAULT: "var(--landing-card-bg-color)",
          foreground: "var(--landing-card-heading-color)",
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
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;