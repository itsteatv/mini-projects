/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Kanit': ['Kanit', 'sans-serif'],
      },
      screens: {
        ">=445px": { "min": "9.375em", "max": "27.8125em" },
      },
    },
  },
  daisyui: {
    themes: ["dim"],
  },
  plugins: [require("daisyui")],

}