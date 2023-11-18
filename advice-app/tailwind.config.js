/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        cyan: "hsl(193, 38%, 86%)",
        neon: "hsl(150, 100%, 66%)",
        blue: {
          grayish: " hsl(217, 19%, 38%)",
          darkGrayish: " hsl(217, 19%, 24%)",
          dark: "hsl(218, 23%, 16%)",
        },
      },
      fontSize: {
        primary: "1.3rem",
      },
      fontFamily: {
        manrope: "'Manrope', sans-serif",
      },
    },
    plugins: [],
  },
};