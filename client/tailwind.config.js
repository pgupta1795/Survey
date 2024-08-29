/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        blue: 'var(--primary-color)',
        aliceblue: 'var(--primary-light-color)',
        darkgray: { 100: '#a3a3a3', 200: '#9b9b9b' },
        darkslategray: '#454545',
      },
      fontFamily: { gotham: 'Gotham', inherit: 'inherit' },
      borderRadius: { '10xs': '3px' },
      backgroundImage: {
        footer: "url('assets/svgs/footer.svg')",
        responseFooter: "url('assets/svgs/responseFooter.svg')",
      },
    },
  },
  corePlugins: { preflight: false },
};
