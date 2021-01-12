import vue from '@vitejs/plugin-vue';

const { resolve } = require('path')
/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  build: {
    outDir: 'Lo/',
  }
}
