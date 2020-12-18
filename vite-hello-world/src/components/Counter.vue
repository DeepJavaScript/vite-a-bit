<template>
  <div class="counter">
    <span class="count">{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Counter',
  computed: {
    ...mapGetters({
      count: 'counter/count'
    })
  },
  methods: {
    ...mapActions({
      increment: 'counter/increment'
    })
  }
};
</script>

<style scoped>
.count {
  margin-right: 16px;
}
</style>