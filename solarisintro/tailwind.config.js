module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        starYellow: '#ffdd9d'
      },
      keyframes: {
        leftSlide: {
          from: { transform: "translateX(-150%)" },
          to: { transform: "translateX(0)" },
        },
        rightSlide: {
          from: { transform: "translateX(150%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        leftSlide: "leftSlide 0.3s ease-out 0s 1",
        rightSlide: "rightSlide 0.3s ease-out 0s 1",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
    fontFamily: {
      korFont: ["korFont"],
      engTitile: ["engTitle"]
    },
  },
  plugins: [],
}