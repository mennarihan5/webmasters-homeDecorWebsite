/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        mediumGrey: "#545454",
        lightBlack: "#1F1F1F",
      },
    },
  },
  plugins: [],
}

