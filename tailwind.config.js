/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
      // shadows: {
      //   neon: "0 0 5px theme('colors.text'), 0 0 20px theme('colors.sec-text')",
      // },
      fontFamily: {
        serif: ["Cinzel", "serif"],
        sans: ["Noto Sans TC", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme("colors");
      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const color1 = colors[color]["500"];
          const color2 = colors[color]["700"];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
