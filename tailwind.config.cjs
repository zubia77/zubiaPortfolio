/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: {
          10: "#E7E7DE",
          20: "#0F3057",
          linked: "#277BC0",
          xing: "#9EB23B",
          mail: "#C85C8E",
          slack: "#",
          discord: "#A084DC",
        },
      },

      boxShadow: {
        outer: "10px 10px 30px rgba(0, 0, 0, 0.5);",
        inner: "inset 5px 5px 15px rgba(0, 0, 0, 0.5);",
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
        'main': "url('/public/logoZ.png')",
        'about': "url('/public/zubiRemovebg.png')",
        'contact': "url('/public/imgportfolio2.png')",
        'luftmasche': "url('/public/zubisLuftmasche.png')",
        'deutschify': "url('/public/deutschifySite.png')",
        'bmi': "url('/public/bmi.png')",
        'derDieDas': "url('/public/derDieDas.png')",
        'mathenerds': "url('/public/mathenerds.png')",
        'sticky': "url('/public/sticky.png')",
        'indianBride': "url('/public/theindianbride.png')",

    },
    },
  },
  plugins: [],
};
