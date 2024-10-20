/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',

        'tablet': '640px',

        'laptop': '1024px',

        'desktop': '1280px',

        'desktop2': '1700px'
      },
      fontFamily: {
        'lato': ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
