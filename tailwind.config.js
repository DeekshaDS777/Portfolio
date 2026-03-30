/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#ede6da',
          300: '#e5dcc8',
          400: '#d9cdb3',
          500: '#c8b8a0',
          600: '#b8a091',
          700: '#8d7969',
          800: '#6b6055',
          900: '#4a4540',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
