import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3016,
    host: true,
  },
  preview: {
    port: 3016,
    host: true,
  },
  test: {
    include: ['tests/**/*.test.ts'],
  },
});
