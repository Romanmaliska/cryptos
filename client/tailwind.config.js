/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#000000",
        "secondary-bg": "#0d0d0d",
        "light-bg": "#1a1a1a",
        "secondary-text": "#b3b3b3",
        "dark-text": "#666666",
        outline: "#262626",
        orange: "#ff9332",
        "light-orange": "#ff9332",
        green: "#6ccf59",
        red: "#ff4d4d",
      },
    },
  },
  plugins: [],
};
