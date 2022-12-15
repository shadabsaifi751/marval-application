/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      '1/2': '75vh',
    },
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('./src/Accects/banner.jpg')",
      //   'footer-texture': "url('./src/Accects/mobile-0819.jpg')",
      // }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
