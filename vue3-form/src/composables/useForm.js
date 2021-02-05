import { computed } from 'vue';

export function generateFormOptions(options) {
  return computed(() =>
    options.map(item => {
      return { text: item, value: item };
    })
  );
}
