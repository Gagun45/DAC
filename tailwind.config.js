/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js"],
  theme: {
    extend: {
      keyframes: {
        scaleAnimation100: {
        from: {width: '0'},
        to: {width: '100px'}
        },
        scaleAnimation50: {
          from: {width: '0'},
          to: {width: '50px'}
          }
      },
      animation: {
        scaleAnimation100 : 'scaleAnimation100 1s ease-in-out forwards',
        scaleAnimation50 : 'scaleAnimation50 1s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

