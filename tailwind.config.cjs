/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary: '#000',
      secondary: '#15181C',
      search: '#202327',
      white: '#D9D9D9',
      gray: '#7A7A7A',
      outline: '#2F3336',
      retweet: '#00C06B',
      like: '#E8265E',
      twitter: '#33A1F2',
      'twitter-dark-hover': '#011017',
      'twitter-light-hover': '#2C8ED6',
    },
  },
  plugins: [],
}
