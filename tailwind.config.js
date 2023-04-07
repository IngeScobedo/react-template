/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inputBorder: '#D8D6DE',
        placeholderInput: '#B9B9C3',
        gray: '#F8F8F8'
      }
    },
  },
  plugins: [],
}