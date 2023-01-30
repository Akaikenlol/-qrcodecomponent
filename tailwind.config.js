/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./design/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'outfit': ['"Outfit"', 'sans-serif'],
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
    ],
      
    
  },
  plugins: [],
}
