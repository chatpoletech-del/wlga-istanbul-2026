/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wlga: {
          bg: "#0a0e14",
          surface: "#111720",
          border: "#1e2a3a",
          amber: "#e8a020",
          blue: "#3b82f6",
          green: "#10b981",
          purple: "#a855f7",
          sky: "#87CEEB",
          "content-bg": "#ffffff",
          "content-border": "#e2e8f0",
          "content-surface": "#f8fafc",
          "content-text": "#1e293b",
          "content-muted": "#64748b",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        display: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
