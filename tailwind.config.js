/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BPG: ["BPG-arial", "cursive"],
      },
    },
  },
  plugins: [],
};
