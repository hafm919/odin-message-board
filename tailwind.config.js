/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js,ejs}"],
  theme: {
    extend: {
      fontFamily: {
        ral: ['"Raleway"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
