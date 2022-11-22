/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'maxxl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }

        'maxlg': { 'max': '1023px' },
        // => @media (max-width: 1023px) { ... }

        'maxmd': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }

        'maxsm': { 'max': '639px' },
        // => @media (max-width: 639px) { ... }
      },
      colors:{
        'darkendark':"#404258",
        'darkdark':'#474E68',
        'darknormal':'#50577A',
        'darklight':'#6B728E',
        'darklighttext':'#EDEDED'
      },
      
    }
  },
  plugins: [],
}