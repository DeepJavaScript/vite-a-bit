<template>
  <fieldset>
    <legend>{{ label }}</legend>
    <slot />
  </fieldset>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
