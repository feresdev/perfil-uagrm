import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFF",
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#192e3d",
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#e5484d",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#fbc451",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },
      green: {
        50: "#f0fdf4",
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
      violet: {
        500: "#8b5cf6",
      },
      orange: {
        500: "#f97316",
      },
      sky: {
        500: "#0ea5e9",
      },
      rose: {
        500: "#f43f5e",
      },
      gray: {
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#7e7e7e",
        600: "#4b5563",
        700: "#374151",
      },

      // Colores dark theme
      "dark-main-color": "#2563eb",
      "dark-main-alt-color": "#062e4b",
      // Texto
      "dark-title-color": "#ededed",
      "dark-text-color": "#999999",
      "dark-light-text-color": "#83919b",
      // Bordes
      "dark-border-color": "#2e2e2e", 
      "dark-border-alt-color": "#3e3e3e",
      // Contenedores
      "dark-container-color": "#232323",
      "dark-container-alt-color": "#2e2e2e",
      "dark-container-strong-color": "#212121",
      // Fondos body
      "dark-body-color": "#1c1c1c",
      "dark-body-alt-color": "#161616",
    },
    screens: {
      phone: { max: "767px" },
      tablet: { min: "768px", max: "1279px" },
      desktop: "1280px",
    },
  },
  plugins: [],
};
export default config;
