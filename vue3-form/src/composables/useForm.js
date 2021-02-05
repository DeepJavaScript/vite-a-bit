import { computed, unref } from 'vue';

export function generateFormOptions(options) {
  return computed(() =>
    unref(options).map(item => {
      if (typeof item === 'object') {
        return item;
      } else {
        return { text: item, value: item };
      }
    })
  );
}
