/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F0D060',
          dark: '#A8860A',
        },
        sand: {
          DEFAULT: '#F5E6C8',
          dark: '#C9A96E',
        },
        pharaoh: {
          DEFAULT: '#1A1008',
          mid: '#2C1D0A',
          light: '#3D2B10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
