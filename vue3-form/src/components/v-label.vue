<template>
  <div class="v-label">
    <label>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}
      <div class="label-tap" v-for="(label, index) in modelValue" :key="index">
        <span class="label-tab-text">
          {{ label }}
        </span>
        <div class="label-tap-remove" @click="remove(index)">x</div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    remove(index) {
      this.$emit("update:modelValue", [
        ...this.modelValue.slice(0, index),
        ...this.modelValue.slice(index + 1),
      ]);
    },
  },
};
</script>

<style lang="scss" scoped>
.label-required {
  opacity: 0;
}
.required {
  color: red;
  opacity: 1;
}

.label-tap {
  display: inline-block;
  background-color: #ececec;
  border-radius: 50em;
  font-size: 0.8em;
  padding: 2px 6px;
  padding-right: 24px;
  position: relative;
  & + & {
    margin-left: 0.2em;
  }
  &-text {
    vertical-align: middle;
  }
  &-remove {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 3px;
    margin: auto;
    $square_width: 15px;
    width: $square_width;
    height: $square_width;
    line-height: $square_width;
    vertical-align: middle;

    border-radius: 50em;

    color: #a9a9a9;
    text-align: center;
    border: solid 1px #a9a9a9;
  }
}
</style>
