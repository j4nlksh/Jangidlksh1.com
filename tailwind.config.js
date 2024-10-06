/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbg : '#3F3F46'
      },
      backgroundImage: {
        'main' : "url('./assets/bgImage.png')",
        'prof' : "url('./assets/profImage.jpeg')",
        'half' : "url('./assets/animeStanding.jpeg')",
      },
      fontFamily: {
        'nav': ['Poppins', 'sans-serif'],  
      },
    },
  },
  plugins: [],
};
