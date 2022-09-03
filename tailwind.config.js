/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily:{
        'icomoon':['icomoon'],
      },
      container: {
        center: true,
      },
    },
    colors:{
      gold:'#b38e55',
      paleGray:'#f7f7f7',
      navyBlue:'#132d46',
      gray:'#e7e9ec',
      green:'#00800a',
      yellow:'#f6b12d',
      red:'#d11317',
      white:'#ffffff',
    },
  },
  plugins: [],
}
