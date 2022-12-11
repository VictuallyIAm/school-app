/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#101755',
        'my-black': '#222222',
      },
      backgroundImage: {
        hero: "url('./data/students.jpg')",
        villain: "url('./data/foot.webp')",
      },
    },
  },
  plugins: [],
}
