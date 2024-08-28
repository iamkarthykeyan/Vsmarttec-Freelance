/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-fade-left-right': 'linear-gradient(to right, rgba(255, 255, 255, 0) -20%, rgba(255, 255, 255, 1) 100%)',
      },
      textColor: {
        'gradient': 'transparent',
      },
      backgroundClip: {
        'text': 'text',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}