// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  app: {
    baseURL: '/c0d3rs_d3n/'
  },
  nitro: {
    preset: 'github-pages'
  },
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ]
})
