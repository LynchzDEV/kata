import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    ui: true,
    include: ['katas/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['katas/**/*.ts'],
      exclude: ['katas/**/*.test.ts']
    }
  }
})