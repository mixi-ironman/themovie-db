/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },

      colors: {
        primary: "#EF4444",
        secondary: "#70b99b",
      },
    },
  },
  plugins: [],
};
