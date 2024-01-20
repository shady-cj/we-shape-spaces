/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        
          backgroundImage: {
          "hero-img": "linear-gradient(#00000040, transparent, #00000040), linear-gradient(to right, #00000040, transparent, #00000040), url('./src/assets/background-hero.jpg')",
          "contact-img":"linear-gradient(#00000040, transparent, #00000040), linear-gradient(to right, #00000040, transparent, #00000040), url('./src/assets/contactUs-bg.jpg')" 
            
          },
          height: {
              "hero-h": "calc(100% - 10rem)" 
      },
    },
  },
  plugins: [],
}