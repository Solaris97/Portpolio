module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        starYellow: '#ffdd9d',
        starBlack: '#282a3a'
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
        "10dv": "10dvh",
        "20dv": "20dvh",
        "30dv": "30dvh",
        "40dv": "40dvh",
        "50dv": "50dvh",
        "60dv": "60dvh",
        "70dv": "70dvh",
        "80dv": "80dvh",
        "90dv": "90dvh",
        "100dv": "100dvh",
      },
    },
    fontFamily: {
      baseFont: ["baseFont"],
      engTitile: ["engTitle"]
    },
  },
  plugins: [],
}