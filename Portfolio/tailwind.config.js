/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgoundImage: {},
      fontFamily: {
        onest: ['Onest Variable', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: "415px",
        header: "909px"
      },
    },
  },
  plugins: [],
};
