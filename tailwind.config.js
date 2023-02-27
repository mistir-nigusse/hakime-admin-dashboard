/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      backgroundColor: ['active','visited'],
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      bg: '#f5faf5',
      green: {
        100: '#f7fafc',
        200:'#A5D6A7',
        300:'#81C784',

        400:'#66BB6A',
        500: '#4CAF50',
        600:'#43A047',
        700: '#388E3C',
        800:'#2E7D32',
        // ...
        900: '#1B5E20',
      },
      gray:{
        600: '#757575',
        500: '9E9E9E',
        700: '#616161',
         400: '#D1D5DB',
         900:'#212121'
      },
      red:{
        900:'#B71C1C'
      }

      // ...
    }
   
  },
  plugins: [],
}