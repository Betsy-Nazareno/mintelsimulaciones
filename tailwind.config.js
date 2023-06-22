/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./src/modules/**/*.{html,js,tsx}",
    "./src/modules/**/**/*.{html,js,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
