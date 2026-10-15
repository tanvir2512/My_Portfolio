/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          primary: "#39FF14",   // Primary Neon Green from Design Spec
          secondary: "#00C853", // Secondary Green from Design Spec
        },
        dark: {
          bg: "#0B0D0C",        // Dark Background from Design Spec
          card: "#1A1F1E",      // Charcoal Card from Design Spec
          text: "#E5E7EB",      // Light Text from Design Spec
        },
      },
      fontFamily: {
        // Oswald for almost everywhere
        oswald: ["var(--font-oswald)", "sans-serif"],
        // Pixel/Display Google Font matching Bitcount Ink for Name Only
        bitcount: ["var(--font-bitcount)", "monospace"],
        // Handwritten font for neon annotations & signature
        handwritten: ["var(--font-handwritten)", "cursive"],
      },
      boxShadow: {
        neon: "0 0 15px rgba(57, 255, 20, 0.35)",
        "neon-strong": "0 0 25px rgba(57, 255, 20, 0.65)",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "fade-up": "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};