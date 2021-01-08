import {
  ref,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default function useCounter({
  initCounter = 0,
  isResetToInitCounter = false
} = {}) {
  const count = ref(initCounter);
  const doubleCount = computed(() => count.value * 2);

  onBeforeMount(() => {
    console.log('useCounter beforeMount!');
  });

  onMounted(() => {
    console.log('useCounter mounted!');
  });

  onBeforeUpdate(() => {
    console.log('useCounter beforeUpdate!');
  });

  onUpdated(() => {
    console.log('useCounter updated!');
  });

  onBeforeUnmount(() => {
    console.log('useCounter beforeUnmount!');
  });

  onUnmounted(() => {
    console.log('useCounter unmounted!');
  });

  function increment() {
    count.value++;
  }

  function reset() {
    const resetCount = isResetToInitCounter ? initCounter : 0;
    count.value = resetCount;
  }

  return {
    count,
    doubleCount,
    increment,
    reset
  };
}
