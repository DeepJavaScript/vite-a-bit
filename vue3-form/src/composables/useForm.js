import { computed, unref } from 'vue';

export function generateFormOptions(options) {
  return computed(() =>
    unref(options).map(item => {
      return { text: item, value: item };
    })
  );
}
