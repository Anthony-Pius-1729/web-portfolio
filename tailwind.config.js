/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono"],
        poppins: ["Poppins"],
      },
    },
    colors: {
      bgColor: "#042f2e",
      bgColor2: "#15403d",
      100: "#f0fdfa",
      btn1: "#6B8A7A",
      btn2: "#DAD3BE",
      btn3: "#B7B597",
      textCol: "#ACE2E1",
      textCol2: "#64CCC5",
      textCol3: "#F5F5F5",
    },
  },
  plugins: [],
};
