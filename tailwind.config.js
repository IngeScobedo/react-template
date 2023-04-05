/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inputBorder: '#D8D6DE',
        placeholderInput: '#B9B9C3'
      }
    },
  },
  plugins: [],
}