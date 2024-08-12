/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(263, 55%, 52%)",
        darkGrayBlue: "hsl(217, 19%, 35%)",
        blackishBlue: "hsl(219, 29%, 14%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayBlue: "hsl(210, 46%, 95%)",
      },

      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', "sans-serif"],
      },
      fontSize: {
        xsm: "13px",
      },
    },
  },
  plugins: [],
};
