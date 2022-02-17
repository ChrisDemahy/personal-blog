// Required for NX
const { join } = require('path');
// import plugins
const typeography = require('@tailwindcss/typography');

module.exports = {
  purge: [join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [typeography],
};
