import tailwindcss from "@tailwindcss/vite";
import { bundledLanguages, type BundledLanguage } from "shiki";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxt/fonts", "@nuxt/image", "@nuxt/scripts"],
  nitro: {
    preset: "github-pages",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
      failOnError: false,
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        
        { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' },
        
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
        highlight: {
          theme: "github-light",
          langs: Object.keys(bundledLanguages).filter(
            (lang) => !lang.includes("+") && !lang.includes("#") && !lang.includes("文")
          ) as BundledLanguage[],
        },
      },
    },
    experimental: {
      sqliteConnector: "native",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  scripts: {
    registry: {
      youtubePlayer: {
        trigger: "onNuxtReady",
      },
    },
  },
});
