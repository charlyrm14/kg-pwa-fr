// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'url'
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'v-gsap-nuxt', '@vite-pwa/nuxt'],
  pinia: {
    /**
     * @default `['stores']`
     */
    storesDirs: []
  },
  css: ['@/app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./', import.meta.url)),
        '@components': fileURLToPath(new URL('./components', import.meta.url)),
        '@utils': fileURLToPath(new URL('./utils', import.meta.url)),
        '@assets': fileURLToPath(new URL('./assets', import.meta.url)),
      }
    }
  },
  runtimeConfig: {
    public: {
      mockApiMode: process.env.NUXT_PUBLIC_MOCK_API_MODE === 'true',
      tokenAccessName: process.env.NUXT_PUBLIC_TOKEN_ACCESS_NAME || 'auth-token',
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
      userTestUuid: process.env.NUXT_USER_TEST_UUID || 'a52e',
      pusherKey: process.env.NUXT_PUBLIC_PUSHER_KEY,
      pusherCluster: process.env.NUXT_PUBLIC_PUSHER_CLUSTER,
      pusherHost: process.env.NUXT_PUBLIC_PUSHER_HOST,
      pusherPort: process.env.NUXT_PUBLIC_PUSHER_PORT,
      vapidKey: process.env.NUXT_PUBLIC_VAPID_KEY
    },
  },
  alias: {
    '~/types': '/types',
    '@types': '/types'
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  nitro: {
    logLevel: 'debug'
  },
  pwa: {
    registerType: 'autoUpdate',
    strategies: 'injectManifest',
    manifest: {
      name: 'KG App',
      short_name: 'KG',
      description: 'King Dreams',
      theme_color: '#2b7fff',
      background_color: '#0f0f0f',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/assets/media/icon-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: '/assets/media/icon-180x180.png',
          sizes: '180x180',
          type: 'image/png'
        },
        {
          src: '/assets/media/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/assets/media/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
    },
    devOptions: {
      enabled: true,
    },
  }  
})
