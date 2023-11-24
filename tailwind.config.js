/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#131316",
        gray: "#56616B",
        base_white: "#FFF;",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      boxShadow: {
        md: "0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06)",
      },
    },
  },
  plugins: [],
};
