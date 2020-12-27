<template>
  <h1>{{ msg }}</h1>
  <button @click="$emit('click')">count is: {{ value }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value: Number
  }
}
</script>
