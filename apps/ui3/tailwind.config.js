/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black - main brand color
        'primary-dark': '#1a1a1a', // Charcoal - for hover states
        'primary-light': '#f5f5f5', // Light gray - for subtle backgrounds
      },
    },
  },
  plugins: [],
};
