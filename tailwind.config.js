/** @type {import('tailwindcss').Config} */
module.exports = {
   mode:"jit",
   content: ["./css/**/*.{html}"],
  theme: {
    spacing: {
      sm: '8px',
      md: '12px',
      margin: '16px',
      xl: '24px',
    },
    extend: {
     fontFamily:{
      display:['"Red Hat Display"', 'sans-serif'],
     }
    },
  },
  plugins: [],
}
