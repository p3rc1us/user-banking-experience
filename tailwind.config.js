/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-gray': '#212121',
        'dark-gray': '#2f2f2f',
      }
    },
  },
  plugins: [],
}