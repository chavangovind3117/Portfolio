/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#344949",
        orange: "#e84949",
        white: "#ffffff",
        black: "#000000",
        bgGray: "#1f1f1f9a",
        Mercury: "rgb(231, 231, 231)",
        indigo: {
          400: "#343d68",
          500: " #343d68be",
          600: "#343d687c",
        },
      },
    },

    // voiletGradient: {
    //   gradient1: "linear-gradient(45deg , #343d68 , #343d68be , #343d687c)",
    // },
    // backgroundImage: {
    //   bgImage1: "url('/src/assets/projects/Project1.png')",
    // },
    boxShadow: {
      shadowBox: '0px 0px 40px #1f1f1f',
      shadowPhoto: '6px 6px 20px #000000',
      inputShadow: '2px 2px 10px #1f1f1f',
      buttonShoadow: '5px 5px 7px 0px #0000003f'
    },
    animation: {
      wiggle: 'wiggle 6s linear infinite',
      blueTint: 'blueTint 0.5s ease-out',
      blob: 'blob 6s linear infinite',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'scale(1.1) ' },
        '50%': { transform: 'scale(1)' },
      },
      blueTint: {
        '0%, 100%': { transform: 'scaleX(0) ' },
        '100%': { transform: 'scale(1)' },
      },
      blob: {
        '0% , 100%': { transform: '-translateY(1) -translateX(1.1) scaleY(0.9) scaleX(0.9) ' },
        '50%': { transform: 'translateY(0) translateX(0) scaleY(1) scaleX(1) ' }
      }
    }
  },
  plugins: [],
}

