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
        background: "#13151a",
        foreground: "#e9eaeb",
        primary: {
          DEFAULT: "#262832",
          foreground: "#f9f9fb",
          hover: "#4a4e5d",
        },
        secondary: {
          DEFAULT: "#17181d",
          foreground: "#f9f9fb",
          hover: "#22242b",
          border: "#262832",
          "border-hover": "#565b6c",
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
        "star-shimmer": {
          "0%, 100%": {
            backgroundImage: "radial-gradient(2px circle at 20% 20%, rgba(255,255,255,0.7) 0%, transparent 0%), radial-gradient(2px circle at 40% 70%, rgba(255,255,255,0.5) 0%, transparent 0%), radial-gradient(2px circle at 60% 30%, rgba(255,255,255,0.7) 0%, transparent 0%), radial-gradient(2px circle at 80% 80%, rgba(255,255,255,0.5) 0%, transparent 0%)",
          },
          "33%": {
            backgroundImage: "radial-gradient(2px circle at 20% 20%, rgba(255,255,255,0.5) 0%, transparent 0%), radial-gradient(2px circle at 40% 70%, rgba(255,255,255,0.7) 0%, transparent 0%), radial-gradient(2px circle at 60% 30%, rgba(255,255,255,0.5) 0%, transparent 0%), radial-gradient(2px circle at 80% 80%, rgba(255,255,255,0.7) 0%, transparent 0%)",
          },
          "66%": {
            backgroundImage: "radial-gradient(2px circle at 20% 20%, rgba(255,255,255,0.7) 0%, transparent 0%), radial-gradient(2px circle at 40% 70%, rgba(255,255,255,0.5) 0%, transparent 0%), radial-gradient(2px circle at 60% 30%, rgba(255,255,255,0.7) 0%, transparent 0%), radial-gradient(2px circle at 80% 80%, rgba(255,255,255,0.5) 0%, transparent 0%)",
          }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
        shimmer: "shimmer 1.5s ease-in-out infinite",
        "star-shimmer": "star-shimmer 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;