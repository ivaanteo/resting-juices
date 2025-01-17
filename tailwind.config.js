/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#003F93',
        lightBlue: '#D3E1EC',
        darkGreen: '#014D0B',
        lightGreen: '#D6E5CA',
        darkPurple: '#681D77',
        lightPink: '#FFCDCB',
        yellow: '#FFFB00',
        white: '#FFFFFF',
      },
      fontFamily: {
        body: ['Playfair Display', 'serif'], // Custom font 
      },
    },
  },
  plugins: [],
}

