/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        PrimaryColor: 'rgb(200, 228, 178)',
        SecondaryColor: 'rgb(158, 210, 190)',
        ExtendedColor1: 'rgb(126, 170, 146)',
        ExtendedColor2: 'rgb(255, 217, 183)'
      }
    },
  },
  plugins: [],
}

