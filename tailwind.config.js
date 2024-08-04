/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['PP Neue Montreal'],
      assassin: ['assassin\\$'],
    },
    extend: {
      colors: {
        'card': '#141414',
        'card-secondary': '#1a1a1a',
        'highlight': '#00d4c8',
      },
    },
  },
  plugins: [],
}
