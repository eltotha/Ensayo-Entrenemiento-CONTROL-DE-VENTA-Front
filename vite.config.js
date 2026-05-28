import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Especifica el puerto que deseas usar
    strictPort: true, // Opcional: Si está en true, Vite fallará si el puerto ya está en uso, en lugar de intentar el siguiente puerto disponible.
  }
})
