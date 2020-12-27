<template>
  <h1>{{ msg }}</h1>
  <button @click="$emit('increment')">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    count: Number,
    msg: String
  }
}
</script>
