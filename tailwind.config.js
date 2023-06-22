/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "375px",
      "lg": "1440px",
    },
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
        "custom-purple": "hsl(245, 57%, 53%)",
      },
      fontFamily: {
        "Red-Hat-Display": ["Red Hat Display", "sans-serif"]
      }
    },
  },
  plugins: [],
}