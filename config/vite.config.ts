import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import buildConifg from './vite.build';
import devConfig from './vite.dev';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const commonConfig = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src/')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '/index.tsx', '/index.ts', '/index.jsx', '/index.js']
    }
  };

  if (command === 'serve') {
    return {
      ...commonConfig,
      ...devConfig
    };
  }
  return {
    ...commonConfig,
    ...buildConifg
  };
});
