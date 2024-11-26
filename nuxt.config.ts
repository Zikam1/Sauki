// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Adding the necessary modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts configuration
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Crimson: {
        wght: '200..900',
        ital: '200..700',
      },
    },
    display: 'swap',  // Correct placement of the 'display' property for font loading
  },

  // Vite configuration to include PNG files as assets
  vite: {
    assetsInclude: ['**/*.PNG'],
  },

  // Global CSS configuration
  css: [
    '~/assets/css/main.css',  // Include the global CSS file with the @import statement for fonts
  ],
});
