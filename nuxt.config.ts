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
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'cyrillic']
    },
    families: [
      {
        name: 'Noto Sans',
        provider: 'google'
      }
    ]
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'En',
        file: 'en.json'
      },
      {
        code: 'ru',
        name: 'Ру',
        file: 'ru.json'
      }
    ],
    langDir: 'locales',
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
