// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'url'
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
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
      tokenAccessName: process.env.NUXT_PUBLIC_TOKEN_ACCESS_NAME || 'auth-token'
    },
  },
  alias: {
    '~/types': '/types',
    '@types': '/types'
  }
})
