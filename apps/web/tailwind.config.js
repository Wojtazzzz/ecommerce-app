/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#242331',
      gray: '#797979',
      'gray-light': '#F9F9F9',
      purple: '#5236FF',
      'purple-light': '#EFECFF',
    },
    fontSize: {
      '4xl': '4.6875rem',
      '3xl': '3.125rem',
      '2xl': '2.5rem',
      xl: '1.875rem',
      lg: '1.5625rem',
      base: '1.375rem',
      sm: '1.25rem',
      xs: '1.125rem',
    },
    extend: {},
  },
  plugins: [],
};
