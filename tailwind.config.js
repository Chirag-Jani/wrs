/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "navitem-color":
          "linear-gradient(180deg, #F68C59 9.57%, #A80F14 94.68%)",
      },
    },
  },
  plugins: [],
};
