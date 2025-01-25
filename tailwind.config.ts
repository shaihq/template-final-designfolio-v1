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
          DEFAULT: "hsl(var(--background))",
          dark: "#13151a",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          dark: "#e9eaeb",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "#262832",
          "dark-foreground": "#f9f9fb",
          "dark-hover": "#4a4e5d",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          dark: "#17181d",
          "dark-foreground": "#f9f9fb",
          "dark-hover": "#22242b",
          "dark-border": "#262832",
          "dark-border-hover": "#565b6c",
        },
        tertiary: {
          DEFAULT: "#ff553e",
          foreground: "#ffffff",
          hover: "#e84934",
          border: "#ff553e",
          "border-hover": "#e84934",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          dark: "#1d1f27",
          "dark-foreground": "#e9eaeb",
          "dark-border": "#2f323d",
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