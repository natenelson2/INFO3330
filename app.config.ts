import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'

/**
 * Shared Start + Vite config for local dev and Vercel Production.
 * Plugin order: tanstackStart → nitro → react.
 * Without nitro(), Vercel builds can succeed but Production returns NOT_FOUND.
 */
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
  server: {
    port: 43123,
  },
})
