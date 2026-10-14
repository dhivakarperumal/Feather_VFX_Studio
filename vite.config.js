import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'three-core',
              test: /node_modules[\\/]+three[\\/]+/,
              priority: 20,
              entriesAware: true,
              maxSize: 400000,
            },
            {
              name: 'react-three',
              test: /node_modules[\\/]+@react-three[\\/]+/,
              priority: 15,
              entriesAware: true,
              maxSize: 350000,
            },
          ],
        },
      },
    },
  },
})
