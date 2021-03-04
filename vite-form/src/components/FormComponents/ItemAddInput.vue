<template>
  <label for="id">{{ labelText }}</label>
  <input
    :type="inputType"
    :id="inputId"
    @change.prevent="$emit('valueInput', $event.target.value)"
  >
  <button
    type="button"
    @click.prevent="$emit('click')"
  >加入</button>
</template>

<script>
export default {
  name: 'ItemAddInput',
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    inputId: {
      type: String,
      required: true
    },
    labelText :{
      type: String,
      default: ''
    }
  },
  emits: [
    'valueInput',
    'click'
  ]

}
</script>

<style scoped>

</style>