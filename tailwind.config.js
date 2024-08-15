/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/js/**/*.js"],
  theme: {
    extend: {
      colors:{
        "primary":"#233000",
        "secondary":"#5E6600",
        "secondary2":"#EBF0E4",
        "textColor":"#4D4D4D",
      },
      backgroundImage:{
        "flower-bg":"url('./public/image/flower.png')",
        "leaf":"url('./public/image/Leaf.png')",
        "quote":"url('./public/image/quote.png')",
        "bg-2":"url('./public/image/background2.png')",
      }
    },
  },
  plugins: [],
}

