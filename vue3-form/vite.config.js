import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

const pathResolve = dir => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  base: './',
  resolve: {
    alias: {
      '/@': pathResolve('src')
    }
  },
  build: {
    outDir: 'titangene'
  }
});
