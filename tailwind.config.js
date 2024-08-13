
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['64px', '80px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },

      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'charcoal': '#4D4856', // Example for 4D4856
        'blue': '#007FFF',     // Example for 007FFF
        'navy': '#17224D',     // Example for 17224D
        'light-gray': '#F5FAFA', // Example for F5FAFA
        'forest-green': '#4D9077', // Example for 4D9077
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
