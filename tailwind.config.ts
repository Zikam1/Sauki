module.exports = {
  theme: {
    extend: {
      colors: {
        saukiBlue: '#048ABF',
        yellowc: '#F2D022',
        raddy: '#EC594C',
        sa: 'rgb(119, 125, 237)',
        ds: 'rgb(70,90,98)',
        wr: 'rgb(155,156,158)',

      },
      fontFamily: {
        sans: ['Plus Jakarta Sans',  'sans-serif'], // Add Plus Jakarta Sans as the default sans font
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
