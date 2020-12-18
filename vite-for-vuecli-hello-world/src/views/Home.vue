<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="count" @increment="increment" @reset="reset" />
  </div>
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue'
import { useStore } from 'vuex'
import HelloWorld from "/src/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore()
    return {
      count: computed(() => store.state.count),
      increment: () => {
        console.log('increment')
        store.commit('increment')
      },
      reset: () => {
        console.log('reset')
        store.commit('reset')
      },
    }
  }
};
</script>
