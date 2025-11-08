// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  app: {
    baseURL: '/c0d3rs_d3n/',
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/c0d3rs_d3n/favicon.ico'
        }
      ]
    }
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
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  fonts: {
    defaults: {
      weights: [200, 300, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'cyrillic']
    },
    families: [
      {
        name: 'Noto Sans',
        provider: 'google'
      }
    ]
  }
})
