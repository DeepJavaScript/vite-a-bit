<template>
  <div class="v-add-text">
    <slot></slot>
    <div class="controller">
      <input class="new-option-text" type="text" v-model="newOption" />
      <input type="button" @click.prevent="addOption" :value="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      typye: String,
      default: "",
    },
    options: {
      typye: Array,
      default: () => [""],
    },
  },
  methods: {
    addOption() {
      if (this.newOption != null) {
        this.$emit("update:options", [...this.options, this.newOption]);
        this.newOption = null;
      }
    },
  },
  data() {
    return {
      newOption: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.v-checkbox-add {
  display: block;
  .new-option-text {
    width: 7em;
    margin-right: 0.5em;
    margin-left: 3.5em;
  }
}
</style>
