import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image'],
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        },
        highlight: {
          theme: 'github-light',
          langs: ['js', 'ts', 'html', 'css', 'vue', 'bash', 'json']
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})