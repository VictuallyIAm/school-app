/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    screens: {
      '2xl': { min: '1535px' },
      xl: { min: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        'regal-blue': '#101755',
        'my-black': '#222222',
        backmodal: '#000e17',
      },
      backgroundImage: {
        hero: "url('./data/students.jpg')",
        villain: "url('./data/foot.webp')",
      },
    },
  },
  plugins: [],
}
