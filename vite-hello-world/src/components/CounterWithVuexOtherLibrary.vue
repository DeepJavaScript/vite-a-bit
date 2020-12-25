<template>
  <div class="counter">
    <h2>Counter use Vuex other library</h2>
    <p class="count">count: {{ count }}</p>
    <p class="count">doubleCount: {{ doubleCount }}</p>
    <div class="counter-action">
      <button @click="increment">increment</button>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
import { useVuex } from '@vueblocks/vue-use-vuex';

export default {
  name: 'CounterWithVuexOtherLibrary',
  setup() {
    const { useGetters, useActions } = useVuex();

    return {
      ...useGetters({
        count: 'counter/count',
        doubleCount: 'counter/doubleCount',
      }),
      ...useActions({
        increment: 'counter/increment',
        reset: 'counter/reset'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}

.count {
  margin-right: 16px;

  @include media(lg) {
    margin-right: 32px;
  }
}
</style>