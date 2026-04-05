export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: "#C0C0C0",
        darkbg: "#0B0B0F",
        darkcard: "#15151C",
        darkborder: "#2A2A33",
        lightaccent: "#2563EB"
      },
    },
  },
  plugins: [],

  extend: {

animation:{
fadeIn:"fadeIn 1s ease-in-out"
},

keyframes:{
fadeIn:{
"0%":{opacity:"0", transform:"translateY(10px)"},
"100%":{opacity:"1", transform:"translateY(0)"}
}
}

}
}
