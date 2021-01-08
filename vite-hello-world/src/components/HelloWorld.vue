<template>
  <h1>{{ msg }}</h1>
  <p>count: {{ count }}</p>
  <p>doubleCount: {{ doubleCount }}</p>
  <button @click="$emit('increment')">increment</button>
  <button @click="$emit('reset')">reset</button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'HelloWorld',
  emits: ['increment', 'reset'],
  props: {
    msg: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const doubleCount = computed(() => props.count * 2);

    return {
      doubleCount
    };
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
</style>
