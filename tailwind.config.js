import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bannerColor: 'rgb(149, 56, 226)'
      },
      textColor: {
        textColor: 'rgb(149, 56, 226)'
      },
     borderColor: {
        btnBorder: 'rgb(149, 56, 226)'
      },
    },
  },
  plugins: [
    daisyui,
  ],
}