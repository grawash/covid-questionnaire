/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BPG: ["BPG-arial", "cursive"],
        anon: ["Anonymous Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
