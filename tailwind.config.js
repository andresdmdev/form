/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Poppins, sans-serif'
    },
    'colors': {  
      '0': '#5E7EC5',  
      '50': '#E5EAF6',  
      '100': '#D6DEF0',  
      '200': '#B8C6E5',  
      '300': '#9AAEDB',  
      '400': '#7C96D0',  
      '500': '#5E7EC5',  
      '600': '#3E61AD',  
      '700': '#2F4983',  
      '800': '#20325A',  
      '900': '#121B31',
      'white': '#F5F5F5',
      'black': '#1F2B56',
      'input': '#EBEBEB',
      'smallBtn': '#ffd54f',
      'smallBtn2': '#ff8a65',
      'input-text': 'rgba(31, 43, 86, 0.89)',
      'input-border': 'rgba(31, 43, 86, 0.89)',
      'error': '#EE5E5E'
    },
    extend: {
      inset: {
        '10.5': '42px',
        '1/5': '20%',
        '1/6': '16.666%',
        '1/10': '10%',
      }
    },
  },
  plugins: [],
}