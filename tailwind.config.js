/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
};
