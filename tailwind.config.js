/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      colors: {
        main: "#00171F",
        primary: "#007EA7",
        secondary: "#003459",
        bright: "#00A8E8"

      }
    },
  },
  plugins: [],
}

