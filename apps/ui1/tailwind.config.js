/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Primary blue
        'primary-dark': '#0056b3', // Darker blue for hover states
        'primary-light': '#4da3ff', // Light blue for accents
      },
    },
  },
  plugins: [],
};
