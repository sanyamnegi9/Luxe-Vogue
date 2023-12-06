/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E3D0BA",
        "background-sec": "#D9C4AC",
        text: "#52301C",
        "sec-text": "#81634E",
        brand: "#5C3928",
        "border-color": "#c7b09a",
        "scroll-bar-color": "#81634e8f",
      },
      fontFamily: {
        serif: [],
        sans: [],
      },
    },
  },
  plugins: [],
};
