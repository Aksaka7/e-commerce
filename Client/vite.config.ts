import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    port: 3000, // Specify the port you want to use
  },
  plugins: [react()],
})
