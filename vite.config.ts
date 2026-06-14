import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Served at the root of the custom domain (inveenta.com), so base is '/'.
// (Was '/INVWEBSITE/' while hosted on the GitHub Pages project path.)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
