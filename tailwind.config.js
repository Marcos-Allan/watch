/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-primary": "#202E40",
        "my-secondary": "#9BB5BF",
        "my-terciary": "#176A73",
        "my-quartenary": "#F2F0EB",
        "my-quintenary": "#0D0D0D",
      },
    },
  },
  plugins: [],
}

