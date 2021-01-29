<template>
  <div class="v-input">
    <label>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}
      <input
        v-bind="$attrs"
        @input="inputHandler($event.target.files.item(0))"
      />
      <img class="photo" :src="blob_url" alt="" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Object,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      blob_url: "",
    };
  },
  methods: {
    inputHandler(file) {
      console.log(file);
      this.blob_url = URL.createObjectURL(file);
      this.$emit("update:modelValue", file);
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
.photo {
  display: block;
  width: 200px;
  height: 200px;
}
</style>
