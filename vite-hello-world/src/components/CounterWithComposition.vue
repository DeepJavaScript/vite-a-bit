<template>
  <div class="counter">
    <h2>Counter use Composition API</h2>
    <div class="counter-list">
      <div class="counter-item">
        <h3>Counter1</h3>
        <p>initCount: {{ initCounter }}</p>
        <p class="count">doubleCount: {{ doubleCount }}</p>
        <div class="counter-action">
          <button @click="increment">increment</button>
          <button @click="reset">reset</button>
        </div>
      </div>
      <div class="counter-item">
        <h3>Counter2</h3>
        <p>initCount: 0</p>
        <p>count: {{ count2 }}</p>
        <p class="count">doubleCount: {{ doubleCount2 }}</p>
        <div class="counter-action">
          <button @click="increment2">increment</button>
          <button @click="reset2">reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useCounter from '/@/composition/useCounter';

export default {
  name: 'CounterWithComposition',
  setup() {
    // `initCount` 故意不用 `ref()`，因為此值不需要 reactive
    const initCounter = 6;
    // 故意不解構 `count`，代表可自行決定此元件所需的資料或邏輯，不需要就不解構出來
    const { doubleCount, increment, reset } = useCounter({
      initCounter,
      isResetToInitCounter: true
    });

    const {
      count: count2,
      doubleCount: doubleCount2,
      increment: increment2,
      reset: reset2
    } = useCounter();

    return {
      initCounter,
      doubleCount,
      increment,
      reset,

      count2,
      doubleCount2,
      increment2,
      reset2
    };
  }
};
</script>

<style lang="scss" scoped>
p,
h3 {
  margin: 0;
}

.counter {
  margin-right: 16px;

  &-list {
    display: flex;
  }

  &-item {
    padding: 8px;
    border: 1px solid;

    display: flex;
    flex-direction: column;
  }

  &-action {
    margin-top: auto;
  }
}
</style>