import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/geezgalery/' // ← CAMBIA ESTO por el nombre que le pusiste
})