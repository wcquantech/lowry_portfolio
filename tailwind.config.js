/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 
          `radial-gradient(circle at 20% 30%, rgba(156, 200, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%), 
          radial-gradient(circle at 80% 70%, rgba(0, 0, 255, 0.1) 0%, rgba(0, 0, 255, 0) 80%)`
      },
      container: {
        padding: "2rem",
        center: true,
      },
      colors: {
        textLight: "#323232",
        textDark: "#fff",
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
