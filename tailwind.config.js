/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#DFBD43',
        'secondary': '#4C4117',
        'lines': '#777',
        'tertiary': '#F9FCF5',
        'alert': '#781313',
        'shadow': '#F5F2E8'

      }
    },
  },
  plugins: [],
}

