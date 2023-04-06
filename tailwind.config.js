/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'galaxy-background': "url('/images/galaxy-background.png')",
      },
      fontFamily: {
        'default': 'IBM Plex Mono',
      },
      colors: {
        'acid-green': '#87F54E',
        'pink': '#EC01A5',
        'almost-white': '#EFEFEF',
        'gray-300': '#4D4D4D',
        'gray-400': '#393939',
        'gray-500': '#262626',
        'gray-600': '#272727',
      }
    },
  },
  plugins: [],
}

