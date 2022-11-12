/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxg: "1170px",
      },
      colors: {
        primary: "hsla(43, 100%, 64%, 1)",
        darkPrimary: "hsla(43, 100%, 44%, 1)",
        accent: "hsla(25, 87%, 60%, 1)",
        "custom-black": "hsla(0, 0%, 11%, 1)",
        "text-light": "hsla(0, 0%, 11%, 0.7)",
        light: "hsla(43, 100%, 96%, 1)",
        orange: "#FFAC4B",
        "custom-white": "#E5E5E5",
        "custom-gray": "hsla(0, 0%, 95%, 1)",
      },
      fontFamily: {
        readex: ["Readex Pro", "sans-serif"],
      },
      spacing: {
        navHeight: "5rem",
        wrapper: "2.4rem",
        bigWrapper: "8rem",
      },
    },
  },
  plugins: [],
};
