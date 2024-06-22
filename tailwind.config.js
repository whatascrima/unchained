/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      colors: { customPurple: "#6f20f7", customGreen: "#54d54a" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
