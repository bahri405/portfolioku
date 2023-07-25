/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#9f1239",
        dark: "#0f172a",
        second: "#065f46",
        third: "#fecdd3",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
