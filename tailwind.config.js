/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
      'footer-mobile': "url('./src/assets/images/mobile/image-footer.jpg')",
      
    }},
  },
  plugins: [],
}

