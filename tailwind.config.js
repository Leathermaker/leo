/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./src/assets/images/mainimg.png')",
        'leatherBanner': "url('./src/assets/images/leatheriamge2.png')",
      },
      screens: {
        '3xl': '1770px', // Add custom breakpoint for 1770px
      },
    },
  },
  plugins: [require('tailwindcss-motion')], 
}