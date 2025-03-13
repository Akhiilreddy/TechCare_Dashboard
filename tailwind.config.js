/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "special-green": '#01F0D0',
        "light-special-green": '#D8FCF7'
      }
    },
  },
  plugins: [],
}

