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
        border: {
          DEFAULT: "hsl(var(--border))",
          light: "#e2e8f0",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "#13151a",
          light: "#ffffff",
        },
        foreground: {
          DEFAULT: "#e9eaeb",
          light: "#0f172a",
        },
        primary: {
          DEFAULT: "#262832",
          foreground: "#f9f9fb",
          hover: "#4a4e5d",
          light: {
            DEFAULT: "#f8fafc",
            foreground: "#0f172a",
            hover: "#f1f5f9",
          },
        },
        secondary: {
          DEFAULT: "#17181d",
          foreground: "#f9f9fb",
          hover: "#22242b",
          border: "#262832",
          "border-hover": "#565b6c",
          light: {
            DEFAULT: "#f8fafc",
            foreground: "#0f172a",
            hover: "#f1f5f9",
            border: "#e2e8f0",
            "border-hover": "#cbd5e1",
          },
        },
        tertiary: {
          DEFAULT: "#ff553e",
          foreground: "#ffffff",
          hover: "#e84934",
          border: "#ff553e",
          "border-hover": "#e84934",
        },
        card: {
          DEFAULT: "#1d1f27",
          foreground: "#e9eaeb",
          border: "#2f323d",
          light: {
            DEFAULT: "#ffffff",
            foreground: "#0f172a",
            border: "#e2e8f0",
          },
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