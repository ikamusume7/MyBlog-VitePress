/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="night"]'],
  content: ["./src/**/*.{vue,js,ts}", "./posts/**/*.md", "./pages/*.md"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: false,
  },
};
