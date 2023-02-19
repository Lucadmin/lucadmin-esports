/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xiketic: "#060410",
        majorelleBlue: "#6957E7",
        electricPurple: "#A250FF",
        darkOrange: "#FF8800",
        white: "#FEFEFE",
        xiketicLight: "#17151E",
        xiketic600: "#59575f"
      },
      fontFamily: {
        montserrat: ['var(--montserrat-font)', "sans-serif"],
        firaSans: ['var(--firaSans-font)', "sans-serif"],
      },
      fontSize: {
        "h1": "clamp(1.77rem, 3.18vw + 0.86rem, 3.77rem)",
        "h2": "clamp(1.61rem, 2.35vw + 0.94rem, 3.09rem)",
        "h3": "clamp(1.46rem, 1.7vw + 0.98rem, 2.53rem)",
        "h4": "clamp(1.33rem, 1.18vw + 0.99rem, 2.08rem)",
        "h5": "clamp(1.21rem, 0.78vw + 0.99rem, 1.7rem)",
        "h6": "clamp(1.1rem, 0.47vw + 0.97rem, 1.39rem)",
        "base": "clamp(1rem, 0.23vw + 0.94rem, 1.14rem)",
        "sm": "clamp(0.8rem, 0.09vw + 0.77rem, 0.86rem)"
      }
    },
  },
  plugins: [],
}