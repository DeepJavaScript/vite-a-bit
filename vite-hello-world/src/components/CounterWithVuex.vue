<template>
  <div class="counter">
    <h2>Counter use Vuex</h2>
    <p class="count">count: {{ count }}</p>
    <p class="count">doubleCount: {{ doubleCount }}</p>
    <div class="counter-action">
      <button @click="increment">increment</button>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {
  name: 'CounterWithVuex',
  setup() {
    const store = useStore();

    return {
      count: computed(() => store.getters['counter/count']),
      doubleCount: computed(() => store.getters['counter/doubleCount']),
      increment: () => store.dispatch('counter/increment'),
      reset: () => store.dispatch('counter/reset'),

      // ...mapActions({
      //   increment: 'counter/increment',
      //   reset: 'counter/reset'
      // })
    }
  },
  // computed: {
    // ...mapGetters({
    //   count: 'counter/count'
    // })
  // },
  // methods: {
    // ...mapActions({
    //   increment: 'counter/increment',
    //   reset: 'counter/reset'
    // })
  // }
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