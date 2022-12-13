/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zendots': ['Zen Dots', 'cursive']
      },
    },
    textShadow: {
      'default': '0 2px 0 #000',
      'md': '0 2px 2px #000',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 4px rgba(255, 255, 255, .8), 0 0 5px rgba(255, 255, 255, 1)',
      'main': '0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff'
    }
  },
  plugins: [require("daisyui"), require('tailwindcss-textshadow')],
}
