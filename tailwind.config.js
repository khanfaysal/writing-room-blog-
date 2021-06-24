module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Catamaran', 'sans-serif'],
      serif: ['Playfair Display', 'serif']
    },
    colors: {
      white:'#FFFFFF',
      yellow: {
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24'
      }
    },
    backgroundColor:{
      primary: '#3490dc',
      secondary: '#3490dc'
    },
    fontSize: {

    },
    // padding: {

    //   12: '8rem',
    // },
    minHeight: {
      1: '25%',
      2: '50%',
      3: '75%',
      full: '100%'
    },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
