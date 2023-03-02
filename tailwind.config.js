const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "ui-sans-serif"],
    },

    screens: {
      phone: "390px",
      // => @media (min-width: 390px) { ... }

      tablet: "834px",
      // => @media (min-width: 834px) { ... }

      laptop: "1080px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: { lightblue: "#0fd6e1", blue: "#396dd2", "red": "#ff2d55" },
    },
  },
  plugins: [],
}
