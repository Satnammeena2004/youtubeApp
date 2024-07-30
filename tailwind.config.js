/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        'roboto':["Roboto"]
      },
      letterSpacing:"0.2px",
      fontWeight:"200"
    },
  },
  plugins: [],
  // darkMode:"class"

}

