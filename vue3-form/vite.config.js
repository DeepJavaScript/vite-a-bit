import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  build: {
    base: "/vite-a-bit/vue3-form/chris/",
    outDir: "chris",
  },
};
