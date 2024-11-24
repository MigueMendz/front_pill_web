/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        660: "660px",
      },
      height: {
        800: "800px",
      },
    },
  },
  plugins: [],
};
