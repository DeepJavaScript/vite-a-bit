import path from 'path';

const pathResolve = (dir) => path.resolve(__dirname, dir);

export default {
  base: './',
  alias: {
    '/@/': pathResolve('src')
  },
  cssPreprocessOptions: {
    scss: {
      additionalData: `
        @import "./src/assets/scss/shared.scss";
      `
    }
  }
};
