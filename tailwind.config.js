const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    //Fill with template files
    './dist/index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        black: colors.black,
        red: colors.red,
        white: colors.white,
      }
    },
  },
  plugins: [],
  
}
