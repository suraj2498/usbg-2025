/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#002147', // Navy
        'primary-dark': '#001529', // Darker navy
        'primary-light': '#3A5A8A', // Light accent blue
      },
    },
  },
  plugins: [],
};
