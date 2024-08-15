/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgoundImage: {},
      fontFamily: {
        pixel: ['"Pixelify Sans"', "sans-serif"],
        init: ["Honk", "sans-serif"],
        macondo: ["Macondo", "sans-serif"],
      },
      screens: {
        xs: "415px",
      },
    },
  },
  plugins: [],
};
