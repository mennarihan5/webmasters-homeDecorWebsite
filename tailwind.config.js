/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mediumGrey: "#545454",
        lightBlack: "#1F1F1F",
        lightGrey: "#DADADA"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}

