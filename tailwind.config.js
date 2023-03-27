const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans]
      },
      colors: {
        primary: "#f3c6c0",
        secondary: "#f8e4e3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "300px",
      },
      backgroundImage: {
        "hero-pattern": "url('/circuit-board.svg')",
      },
    },
  },
  plugins: [],
}