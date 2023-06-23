/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#298220",
        "secondary": "#b83c3f",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
      }
    },

  },
  plugins: [],
}
