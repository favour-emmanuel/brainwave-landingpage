/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik",
      },
      colors: {
        appwhite: "#FCFDFE",
        appnavy: "#161C2D",
        appblue: "#473BF0",
        appCyan: "#F4F7FA",
      },
    },
  },
  plugins: [],
};
