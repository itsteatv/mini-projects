/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#CCCCCC',
        customDark: '#808080'
      },
      screens: {
        ">=640px": { "min": "9.375em", "max": "25em" },
        "<=400px": { "min": "25em" },
      },
    },
  },
  plugins: [],
}