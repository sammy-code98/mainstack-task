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
        base_gray: "#56616B",
        base_white: "#FFF;",
        secondary: "#EFF1F6",
        base_green: "#E3FCF2",
        primary_green: "#075132",
        secondary_green: "#0EA163",
        primary_red: "#F9E3E0",
        base_red: "#961100",
        base_yellow: "#A77A07",
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
