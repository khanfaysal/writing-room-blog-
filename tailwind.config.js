// old config
module.exports = {
  purge: {
    content: [
      // "./src/**/*.html",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    layers: ["components", "utilities", "base"],
    safelist: [
      "text-primary",
      "text-fs-primary",
      "font-jost",
      "md:w-wrap",
      "w-mobile-wrap",
    ],
  },
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      jost: ["Jost, sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "home-hero": "url('images/home-hero.png')",
        polygon: "url('images/Polygon.svg')",
        ecommerceHeading:
          "url('images/EcommercePageAssets/eecommerceHeadingBg.svg')",
        sslVectorBackground:
          "url('./images/SSLPage/SecurityBackgroundVectorImage.jpg')",
        partner: "url('images/partners program/partner-program.jpg')",
        protection: "url('./images/protection/heroProtection.png')",
        wordpressHero: "url('./images/Wordpress/Hero.jpg')",
        sharedHero: "url('./images/Shared/shared.png')",
        securityProtection: "url('./images/security/heroSecurity.png')",
      }),
      width: {
        wrap: "70%",
        "mobile-wrap": "90%",
        "3/10": "30%",
        "3/20": "15%",
        logo: "16.2%",
        "custom-card-2xl": "350px",
        "custom-card-lg": "300px",
        "custom-card-sm": "full",
      },
      padding: {
        "3/20": "15%",
      },
      height: {
        map: "500px",
      },
      fontSize: {
        "5.2xl": "3.2rem",
        "fs-primary": "1.25rem",
        cardHeadingSize: "24px",
        cardParagraphSize: "20px",
        cardSubHeadingSize: "18px",
      },
      lineHeight: {
        "leading-1.3": "1.3",
      },
      scale: {
        0: "0",
        25: ".25",
        50: ".5",
        75: ".75",
        90: ".9",
        95: ".95",
        100: "1",
        103: "1.01",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
      },
      colors: {
        white: "#fff",
        primary: "#27697F",
        "primary-light": "#f7fdff",

        secondary: "#606C7A",
        "light-gray": "#798897",
        exception: "#d8d8d8",

        muted: "#f6f6f6",
        "muted-light": "#fafafa",
        "muted-background": "#F5F9FF",

        "accent-red": "#ED3A52",
        "accent-red-light": "#fff7f8",

        "accent-blue": "#002450",
        "accent-blue-light": "#fdfdff",
        "accent-dark-blue": "#090a25",
      },
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require("@tailwindcss/forms")],
};

// new config

// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     fontFamily: {
//       sans: ['Catamaran', 'sans-serif'],
//       serif: ['Playfair Display', 'serif']
//     },
//     colors: {
//       white:'#FFFFFF',
//       yellow: {
//         100: '#FEF3C7',
//         200: '#FDE68A',
//         300: '#FCD34D',
//         400: '#FBBF24'
//       },
//       Black: {
//         300: '#D1D5DB',
//         400: '#9CA3AF',
//         600: '#4B5563',
//         700: '#374151'
//       }
//     },
//     backgroundColor:{
//       primary: '#001757',
//       secondary: '#dce9c6'
//     },
//     // fontSize: {
//     //   sm: '10px',
//     //   base: '16px',
//     //   lg: '25px',
//     //   xl: '32px'
//     // },
//     extend: {

//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
