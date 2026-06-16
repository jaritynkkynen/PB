import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PB/',
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  server: {
    port: 5173
  }
})
