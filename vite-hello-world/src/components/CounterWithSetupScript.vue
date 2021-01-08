<template>
  <div class="counter">
    <h2>
      <span>Counter use Composition API + </span>
      <code v-text="`<script setup>`" />
    </h2>
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
      <div class="counter-item">
        <!--
          <HelloWorld> 的 `msg` 不能設為 "HelloWorld"，可能是值與元件名稱衝突
        -->
        <HelloWorld
          msg="Counter2"
          :count="count2"
          @increment="increment2"
          @reset="reset2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
// import 的任何東西 (包括 component) 都可直接在 template 使用
// 就像在 `setup()` 中寫 Composition API code，但不用手動 return 東西
import HelloWorld from '/@/components/HelloWorld.vue';

import useCounter from '/@/composition/useCounter';

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
