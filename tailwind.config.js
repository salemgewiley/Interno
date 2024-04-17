/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    backgroundImage: {
      hero: "url(/img/hero/bg.jpg)",
      grid: "url(/img/grid.png)",
    },
    extend: {
      fontFamily: {
        primary: ['"DM Serif Display", serif'],
        secondary: "Jost",
      },
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
      keyframes: {
        rightArrow: {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(5px, 0)",
          },
        },
      },

      animation: {
        rightArrow: "rightArrow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
