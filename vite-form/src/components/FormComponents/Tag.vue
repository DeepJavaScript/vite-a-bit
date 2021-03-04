<template>
  <span v-for="(tag, index) in userProfileTags" :key="'tag' + index">{{ tag }}<button @click.prevent="$emit('removeTag', tag)">x</button></span>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    userProfileTags: {
      type: Array,
      required: true
    }
  },
  emits: [
    'removeTag'
  ]
}
</script>

<style scoped>
span {
  margin: 0 3px;
  padding: 5px;
  background: green;
  color: #fff;
  border-radius: 5px;
}

button {
  border: none;
  background-color: inherit;
  color: #fff;
}
</style>