/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  //サイトでダークモード
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        customBeige: '#f7f3e6', //BackgroundColor
        customBrown: '#e3ddcc', //BackgroundColor
        customBlue: '#354896', //Font-Color
      },
      fontFamily: {
        'Maru': ['"Zen Maru Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

