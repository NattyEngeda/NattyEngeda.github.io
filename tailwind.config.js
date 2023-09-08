/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': {
          50: '#6a8ec8',
          100: '#5780c1',
          200: '#4572ba',
          300: '#3e66a8',
          400:'#375b95',
          500:'#34568b',
          600: '#305082',
          700: '#294470',
          800: '#22395d', 
          900: '#1c2e4a'
      }
      }
    },
    fontFamily: {
      Alkatra: "cursive",
      VT323: "monospace",
    },
  },
  plugins: [],
};
