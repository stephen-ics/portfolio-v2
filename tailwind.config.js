/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      width: {
        '128':'30rem',
      },
      height: {
        '128':'36rem',
      },
      colors: {
        slate: {
          1000: "#49536F",
        }
      }
    },
  },
  plugins: [],
}
