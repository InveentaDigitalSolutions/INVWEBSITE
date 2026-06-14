import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Local dev serves at root ('/'). The production build targets the GitHub
// Pages project path ('/INVWEBSITE/'). When the custom domain (inveenta.com,
// served at root) is live, change the build base to '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/INVWEBSITE/' : '/',
  plugins: [react()],
}))
