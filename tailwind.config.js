/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1144px',
      },
      fontFamily: {
        'primary': ["Poppins", "sans-serif", ],
      },
      colors: {
        'primary': '#F40404',
      },
      backgroundImage: {
        'banner': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('./assets/banner.png')",
      }
    },
  },
  plugins: [],
}
