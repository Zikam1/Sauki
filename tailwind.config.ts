module.exports = {
  theme: {
    extend: {
      colors: {
        saukiBlue: '#048ABF',
        yellowc: '#F2D022',
        raddy:'#EC594C'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', ,'sans-serif'], // Add Plus Jakarta Sans as the default sans font
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' }, // Fully visible
          '50%': { opacity: '0' },     // Invisible
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
