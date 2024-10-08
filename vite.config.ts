/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
    typecheck: {
      enabled: true,
      tsconfig: 'tsconfig.app.json'
    },
  },
})
