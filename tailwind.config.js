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
        textColor: 'rgb(149, 56, 226)',
        textGreen: 'rgb(48, 156, 8)'
      },
     borderColor: {
        btnBorder: 'rgb(149, 56, 226)',
        greenBorder: 'rgb(48, 156, 8)'
      },
    },
  },
  plugins: [
    daisyui,
  ],
}