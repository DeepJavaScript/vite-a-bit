import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const pathResolve = dir => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '/@': pathResolve('src')
    }
  }
});
