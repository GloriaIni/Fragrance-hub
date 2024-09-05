/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#FE7D91",
        ash: "#938F8F"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playFairDisplay: ['Playfair Display', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        roboto:['Roboto', 'sans-serif']
      },
      container:{
        center: true,
        padding: "15px",
      }
    },
  },
  plugins: [],
}

