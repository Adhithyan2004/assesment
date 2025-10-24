// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      // OVERRIDE the default 'sans' font stack with Sora
      sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'], 
    },
    extend:{
        colors:{
        'primeblue' : '#0F0B43',
        'primepeach' : '#EB6651',
        },
    },
  },
  
  plugins: [],
}