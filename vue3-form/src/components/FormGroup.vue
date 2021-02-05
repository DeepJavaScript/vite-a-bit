<template>
  <fieldset v-if="!labelFor">
    <legend>{{ label }}</legend>
    <slot />
  </fieldset>

  <div v-else class="form-group">
    <label :for="labelFor">{{ label }}</label>
    <slot :label-for="labelFor" />
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    label: {
      type: String,
      required: true
    },
    labelFor: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.form-group {
  margin-bottom: 4px;

  label {
    display: block;
  }
}
</style>
