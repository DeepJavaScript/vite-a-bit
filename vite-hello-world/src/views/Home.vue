<template>
  <div class="home">
    <h1>This is an home page</h1>
    <img alt="Vue logo" src="/@/assets/logo.png" />
    <img alt="Vue logo" src="/src/assets/logo.png" />
    <HelloWorld
      msg="Hello Vue 3.0 + Vite"
      :count="count"
      @increment="increment"
      @reset="reset"
    />
    <hr />

    <Counter />
    <hr />

    <CounterWithComposition />
    <hr />

    <CounterWithSetupScript />
  </div>
</template>

<script>
import { ref } from 'vue';

import HelloWorld from '/@/components/HelloWorld.vue';
import Counter from '/@/components/Counter.vue';
import CounterWithComposition from '/@/components/CounterWithComposition.vue';
import CounterWithSetupScript from '/@/components/CounterWithSetupScript.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Counter,
    CounterWithComposition,
    CounterWithSetupScript
  },
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    function reset() {
      count.value = 0;
    }

    return {
      count,
      increment,
      reset
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>