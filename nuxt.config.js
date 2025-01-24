export default defineNuxtConfig ({
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'stripefrontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  vite: {
    server: {
      host: '0.0.0.0', // Allow external access
      port: 3000,
      strictPort: true,
      hmr: {
        host: 'stripe.local', // Allow Hot Module Reloading on this domain
      },
      allowedHosts: ['stripe.local', 'localhost'], // Allow both stripe.local and localhost
    },
  },

  nitro: {
    compatibilityDate: '2025-01-24',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  compatibilityDate: '2025-01-23'
})