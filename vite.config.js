import { resolve } from 'path'
import { defineConfig } from 'vite'

import fs from 'fs'

function htmlCleanUrlsPlugin() {
  return {
    name: 'html-clean-urls',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url !== '/' && !req.url.includes('.')) {
          const url = new URL(req.url, 'http://localhost')
          const pathname = url.pathname
          const possibleHtmlPath = resolve(__dirname, pathname.slice(1) + '.html')
          if (fs.existsSync(possibleHtmlPath)) {
            req.url = pathname + '.html' + url.search
          }
        }
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [htmlCleanUrlsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        manichiura: resolve(__dirname, 'manichiura-pedichiura.html'),
        coafor: resolve(__dirname, 'coafor-extensii.html'),
        makeup: resolve(__dirname, 'make-up.html'),
        sprancene: resolve(__dirname, 'sprancene.html'),
        epilare: resolve(__dirname, 'epilare-definitiva.html'),
        pachete: resolve(__dirname, 'pachete-beauty.html'),
        galerie: resolve(__dirname, 'galerie.html'),
        despre: resolve(__dirname, 'despre-noi.html'),
        contact: resolve(__dirname, 'contact.html'),
        termeni: resolve(__dirname, 'termeni-si-conditii.html'),
        confidentialitate: resolve(__dirname, 'politica-de-confidentialitate.html'),
        cookie: resolve(__dirname, 'politica-cookie.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
