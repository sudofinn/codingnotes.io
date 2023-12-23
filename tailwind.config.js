/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
     'headersolution':"url('../assets/bg_solution_2.png')",
      'prosolution': "url('../assets/codingnotes_pro_solution_2.png')"
      },
      
    },
  },
  plugins: [],
}