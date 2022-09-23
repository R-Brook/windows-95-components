/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#1fb6ff",
      black: "#000000",
      orange: "#ff7849",
      green: "#13ce66",
      "green-blue": "#008080",
      "gray-dark": "#273444",
      gray: "#C0C0C0",
      "gray-light": "#E5EEED",
    },
  },
  plugins: [],
}
