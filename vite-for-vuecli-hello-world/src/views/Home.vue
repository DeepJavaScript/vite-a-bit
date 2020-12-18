<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="name" />
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
      name: computed(() => store.getters.name)
    }
  }
};
</script>
