/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'oxygen': ['"Oxygen"', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width'
    },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      'lg': '1024px',
      // => @media (min-width: 992px) { ... }
    },
  },
  plugins: [],
};
