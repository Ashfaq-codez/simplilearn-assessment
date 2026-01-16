import { Outfit } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ['Inter', 'outfit'],
      },
      colors: {
        brand: {
          gold: "#e4bc7aff",        // The specific Orange/Gold text and buttons
          blue: "#2563EB",        // The deep blue for the Speaker section
          cyan: "#67E8F9",        // The bright cyan for the Agenda section
          dark: "#020617",        // Hero background
          light: "#eff6ff",       // The soft blue background for "What We'll Explore"
        }
      },
    },
  },
  plugins: [],
};
export default config;