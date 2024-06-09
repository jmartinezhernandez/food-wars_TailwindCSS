/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        main: '#0c0c0c', // Negro
        primary: '#fafafa', // Blanco 
        secundary: '#ffd100', // Amarillo que acentua
        dark: '#212429', // gris
      },
    },
  },
  plugins: [],
}