/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['PP Neue Montreal'],
      assassin: ['assassin\\$'],
    },
    extend: {
      screens: {
        '3xl': '2300px',
      },
      colors: {
        'card': '#1a1a1a',
        'card-secondary': '#141414',
        'highlight': '#00d4c8',
      },
    },
  },
  plugins: [],
}
