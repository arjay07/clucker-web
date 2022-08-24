const Colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF5757",
          light: "#f37d7d",
          dark: "#ae4040"
        },
        danger: Colors.red['500']
      }
    }
  },
  plugins: [],
}
