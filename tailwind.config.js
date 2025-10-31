/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // react project aanengil
  ],
  theme: {
    extend: {
      colors: {
        brand: "#f59e0b",   // Example: gold
        brand2: "#d97706",  // Darker gold
      },
    },
  },
  plugins: [],
}
