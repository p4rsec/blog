/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        terminal: {
          green: "#00FF41",
          "dark-green": "#008F11",
          bg: "#0D0208",
          text: "#00FF41",
          accent: "#008F11",
          border: "#003B00",
        },
        terminal: {
          bg: "#0D0208",
          text: "#00FF41",
          border: "#00FF41",
          "border-dim": "#003B00",
        },
      },
      fontFamily: {
        mono: ["Courier New", "Monaco", "Menlo", "monospace"],
        terminal: ["Courier New", "Monaco", "Menlo", "monospace"],
      },
      animation: {
        blink: "blink 1s infinite",
        glitch: "glitch 0.3s infinite",
        typewriter: "typewriter 2s steps(40, end)",
        "matrix-rain": "matrix-rain 1s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "matrix-rain": {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        terminal: "0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41",
        "terminal-inset": "inset 0 0 10px rgba(0, 255, 65, 0.1)",
      },
    },
  },
  plugins: [],
};
