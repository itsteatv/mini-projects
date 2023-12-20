/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM': ['IBM Plex Sans', 'sans-serif'],
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      screens: {
        ">=365px": { "min": "9.375em", "max": "22.8125em" },
      },
      fontSize: {
        "titleClamp": "clamp(0.5rem, 10.2vw - 0.5rem, 1.875rem)",
        "textClamp": "clamp(0.5rem, 3.7vw + 0.2rem, 1rem)",
        "welcomeClamp": "clamp(0.75rem, 16.7vw - 0.8rem, 3rem)"
      }
    },
  },
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [require("daisyui")],
} 