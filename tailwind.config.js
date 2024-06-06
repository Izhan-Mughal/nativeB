/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c33366',
          '50': '#fcf3f7',
          '100': '#fae9f1',
          '200': '#f7d3e4',
          '300': '#f2afcd',
          '400': '#e87eab',
          '500': '#dd578d',
          '600': '#c33366',
          '700': '#af2754',
          '800': '#912345',
          '900': '#79223d',
          '950': '#490e20',
        },
        dark: '#1C1D22'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

