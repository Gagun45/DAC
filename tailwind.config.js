/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js", "./src/components/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        width10percent: {
          from: { width: '0' },
          to: { width: '8%' }
        },
        scale0to1: {
          from: { scale: '0' },
          to: { scale: '1' }
        },
        opacity0to1: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        }
      },
      animation: {
        width10percent: 'width10percent 500ms ease-in-out forwards',
        opacity0to1: 'opacity0to1 500ms ease-in-out forwards'
      },
      screens: {
        'sm' : '512px'
      }
    },
  },
  plugins: [],
}

