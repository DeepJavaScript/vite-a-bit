import path from 'path';

const resolve = dir => path.join(__dirname, dir);

export default {
  base: './',
  alias: {
    '/@/': resolve('src'),
  },
  cssPreprocessOptions: {
    scss: {
      additionalData: `
        @import "./src/assets/scss/shared.scss";
      `
    }
  }
};
