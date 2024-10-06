/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mediumGrey: "#545454",
        mediumGrey2: "#929292",
        lightBlack: "#1F1F1F",
        lightGrey: "#DADADA",
        lightGrey2: "#8C8C8C",
        lightGrey3: "#F1F1F1",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}

