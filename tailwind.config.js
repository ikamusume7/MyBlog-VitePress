/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./.vitepress/theme/*.{vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
