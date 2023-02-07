/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color: {
            10: "#E7E7DE",
            20: "#0F3057",
        },
    },
    },
  },
  plugins: [],
}
