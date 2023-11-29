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
        ">=345px": { "min": "9.375em", "max": "21.5625em" },
        ">=445px": { "min": "9.375em", "max": "27.8125em" },
        ">=465px": { "min": "9.375em", "max": "29.0625em" },
      },
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}