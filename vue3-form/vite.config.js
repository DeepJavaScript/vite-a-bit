import path from 'path';
import vue from '@vitejs/plugin-vue';

const pathResolve = dir => path.resolve(__dirname, dir);

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  build: {
    base: './'
  },
  alias: {
    '@': pathResolve('src')
  }
};
