/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'spotify-green': '#1DB954',
          'spotify-black': '#121212',
          'spotify-light-gray': '#282828',
          'spotify-dark-gray': '#181818',
          'spotify-divider': '#2A2A2A',
          'spotify-hover': '#2a2a2a', 
        },
      },
    },
    plugins: [],
}