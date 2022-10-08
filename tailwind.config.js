/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        540: "35rem",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        button:
          "-2px -2px 0px 0px rgb(0, 0, 0) inset, 2px 2px 0px 0px rgb(254, 254, 254) inset, -4px -4px 0px 0px rgb(130, 130, 130) inset",
        "button-active":
          "-2px -2px 0px 0px rgb(254, 254, 254) inset, 3px 3px 0px 0px rgb(0, 0, 0) inset",
        "vertical-line":
          "2px 0px 0px 0px rgb(151 151 151) inset, 4px 0px 0px 0px rgb(229 238 237) inset",
      },
    },
    colors: {
      blue: "#1fb6ff",
      black: "#000000",
      orange: "#ff7849",
      green: "#13ce66",
      "green-blue": "#008080",
      "gray-dark": "#273444",
      gray: "#C0C0C0",
      "gray-light": "#E5EEED",
      "gray-dark": "#979797",
    },
    fontFamily: {
      sans: ["windows regular", "sans-serif"],
      mono: ['"Courier New"', "monospace"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
}
