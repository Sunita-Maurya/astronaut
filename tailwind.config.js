/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px red",
        "4xl": ["0 35px 35px red", "0 45px 65px red"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
