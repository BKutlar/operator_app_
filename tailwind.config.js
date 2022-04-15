// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variant: {
    extend: {},
  },
  
  plugins: [
    require('@tailwindcss/forms'),

  ],
};
