/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}",
    "./src/components/**/*.{html,jsx}",
    "./src/pages/**/*.{html,jsx}",
    "./src/containers/**/*.{html,jsx}",
    "./index.html",],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        black: {
          100: "#edd4d4",
          200: "#dbaaaa",
          300: "#c97f7f",
          400: "#b75555",
          500: "#a52a2a",
          600: "#842222",
          700: "#631919",
          800: "#421111",
          900: "#210808"
        },
        "mono": {
          50: "#FCFCFC",
          100: "#FCFCFC",
          200: "#FCFCFC",
          300: "#FAFAFA",
          400: "#F7F7F7",
          500: "#F5F5F5",
          600: "#DEDEDE",
          700: "#C4C4C4",
          800: "#A3A3A3",
          900: "#757575",
          950: "#545454"
        },
        'cork': {
          DEFAULT: '#472D1F',
          50: '#E0C6B8',
          100: '#DABBAA',
          200: '#CDA48D',
          300: '#C18D71',
          400: '#B57655',
          500: '#9C6344',
          600: '#805138',
          700: '#633F2B',
          800: '#472D1F',
          900: '#20140E',
          950: '#0C0805'
        },
        "brick": {
          50: "#FBF4F3",
          100: "#F6E6E4",
          200: "#EECDC9",
          300: "#E4B1AA",
          400: "#D5867C",
          500: "#BC4A3C",
          600: "#AA4436",
          700: "#973C30",
          800: "#742E25",
          900: "#51201A",
          950: "#421A15"
        },
        "sage": {
          50: "#F6F6F3",
          100: "#EFF0EB",
          200: "#DDDED4",
          300: "#CECEBF",
          400: "#BCBDA8",
          500: "#ACAD94",
          600: "#8F906F",
          700: "#6D6E54",
          800: "#484837",
          900: "#25261D",
          950: "#11110D"
        },
        "timberwolf": {
          50: "#FDFCFC",
          100: "#F8F7F7",
          200: "#F0EFEF",
          300: "#E9E7E7",
          400: "#DFDCDD",
          500: "#D8D4D5",
          600: "#C5BFC0",
          700: "#AFA7A9",
          800: "#978C8F",
          900: "#6E6366",
          950: "#50494B"
        }
      },
      fontFamily: {
        body: ['Raleway', 'sans-serif'],
        heading: ['Convergence', 'sans-serif'],
        subheading: ['Averia Serif Libre', 'serif']
      }
    },


  },
  plugins: [],
  mode: 'jit',
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