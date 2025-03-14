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
        "light-special-green": '#D8FCF7',
        "special-purple": '#F4F0FE',
        "special-blue": '#E0F3FA',
        "special-orange": '#FFE6E9',
        "special-pink": '#FFE6F1'
      }
    },
  },
  plugins: [],
}

