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
        'services_one': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('./assets/services1.png')",
        'services_two': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('./assets/services2.png')",
        'services_three': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('./assets/services3.png')",
        'services_four': "url('./assets/services4.png')",
        'blog_one': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('./assets/blog1.png')",
        'blog_two': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('./assets/blog2.png')",
        'blog_three': "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('./assets/blog3.png')",
        'map': "url('./assets/map.png')",
      }
    },
  },
  plugins: [],
}
