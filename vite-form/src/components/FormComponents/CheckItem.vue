<template>
  <template
    v-for="item in interestsOptions"
    :key="item.value">
    <input
      type="checkbox"
      :id="`interests-${item.value}`"
      :value="item.value"
      :checked="false"
      @change.prevent="$emit('check', { interestValue: item.value, isChecked: $event.target.checked })"
    >
    <label :for="`interests-${item.value}`">{{ item.name }}</label>
  </template>
</template>

<script>
export default {
  name: 'CheckItem',
  props: {
    list: {
      type: Array,
      required: true
    },
    interestsOptions: {
      type: Array,
      required: true
    }
  },
  emits: [
    'check',
  ],
  methods: {
    isInterestChecked(interestValue) {
      console.log(this.list);
      return this.list.some(interest =>  interest === interestValue);
    }
  }
}
</script>

<style>

</style>