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
      },
      Black: {
        300: '#D1D5DB',
        400: '#9CA3AF',
        600: '#4B5563',
        700: '#374151'
      }
    },
    backgroundColor:{
      primary: '#001757',
      secondary: '#dce9c6'
    },
    // fontSize: {
    //   sm: '10px',
    //   base: '16px',
    //   lg: '25px',
    //   xl: '32px'
    // },
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
