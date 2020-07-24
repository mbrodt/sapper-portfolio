const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      screens: {
        xxl: "1600px",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem",
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
    },
    typography: {
      default: {
        css: {
          a: {
            color: "#3182ce",
            fontWeight: "bold",
            textDecoration: "none",
          },
        },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "group-hover"],
    scale: ["responsive", "hover", "group-hover"],
  },
  plugins: [
    require("tailwindcss-font-inter")(),
    require("@tailwindcss/typography"),
  ],
};
