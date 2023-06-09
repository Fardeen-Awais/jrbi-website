const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        poppins: ['var(--font-poppins)', ...fontFamily.sans],        
        montserrat: ['--font-montserrat', ...fontFamily.sans]
      },
      colors: {
        primary:"0152a8",
        secondary:"dcedfe",
        darkprimary: "#f3c6c0",
        darksecondary: "#f8e4e3",
        darktertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-300": "#143450",
        "white-100": "#f3f3f3",
        "white-200": "#f1f1f1",
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
  plugins: [
    require('@tailwindcss/typography'), // Adding typography specially in articles
    require('@tailwindcss/forms'), // I should implement my forms
    require('@tailwindcss/line-clamp'), // Climping line in post description
  ],
}