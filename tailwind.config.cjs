/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          10: "#E7E7DE",
          20: "#0F3057",
        },
      },
      fontFamily: {
        10: "Patrick Hand SC",
        20: "Comic Neue",
        30: "Coming Soon",
        40: "Gloria Hallelujah",
        50: "Gochi Hand",
        60: "Grand Hotel",
        70: "Homemade Apple",
        80: "Indie Flower",
        90: "Pacifico",
        100: "Patrick Hand SC",
      },
      backgroundImage: {
        
        'about': "url('/public/zubiRemovebg.png')",
        

    },
    },
  },
  plugins: [],
};
