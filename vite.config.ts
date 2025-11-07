import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true, // Mejor debugging en desarrollo
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    cssMinify: 'lightningcss', // Usar el nuevo optimizador de CSS
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: { name?: string }) => {
          const fileName = assetInfo.name || '[name]'
          const info = fileName.split('.')
          const ext = info.pop()
          const name = info.join('.')
          return `assets/${name}-[hash].${ext}`
        }
      }
    }
  }
}) satisfies UserConfig

