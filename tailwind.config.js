/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          300: '#E3D5CA',
          400: '#D5BFB2',
          500: '#C7A99A',
        }
      }
    },
  },
  plugins: [],
};