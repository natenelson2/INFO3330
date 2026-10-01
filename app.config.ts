import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

/**
 * Shared Start + Vite config. TanStack Start is registered via the
 * official Vite plugin so `npm run dev` (vite) serves the router app
 * without a static index.html.
 */
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart(),
    viteReact(),
  ],
  server: {
    port: 43123,
  },
})
