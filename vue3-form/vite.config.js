import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {
    open: './index.html'
  },
  build: {
    base: "./",
    outDir: "/mango"
  }
}
