/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  purge:[
    "./src/**/*.{.js,jsx,ts,tsx}"
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
