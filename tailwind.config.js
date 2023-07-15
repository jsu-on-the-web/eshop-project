/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}",
    "./src/components/**/*.{html,jsx}",
    "./src/pages/**/*.{html,jsx}",
    "./src/containers/**/*.{html,jsx}",],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        blue: {
          50: '#e3f2fd',
        }
      },
      fontFamily: {
        body: ['Raleway', 'sans-serif'],
        heading: ['Convergence', 'sans-serif'],
        subheading: ['Averia Serif Libre', 'serif']
      }
    },
    plugins: [],
    mode: 'jit',

  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

}