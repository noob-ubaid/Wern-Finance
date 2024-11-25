const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#772ab3",
        secondary: "#adb2b1",
        foreground: "#ffffff",
      },
      fontFamily: { mplus1: '"M PLUS 1", sans-serif' },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

