/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      prompt: ["'Prompt'", "sans-serif"],
      rubik: ['"Rubik"', "sans-serif"],
    },
    extend: {
      colors: {
        oracle: "#FCF9FC",
        nero: "#222222",
        "carmine-pink": "#F04E3C",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
