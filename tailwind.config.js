/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        xsmd: "800x",
        smd: "900px",
        md: "1200px",
        lg: "1300px",
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        moon: "3.5rem,3rem,0,0,#dc2626",
      },
    },
  },
  plugins: [],
};

