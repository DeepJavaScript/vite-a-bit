<template>
  <v-checkboxes
    v-model="checkedValues"
    :label="label"
    :options="options"
    :name="name"
    :isRequired="isRequired"
  />
  <input v-model="newOption" type="text" @submit.prevent="addOption" />
  <button type="button" @click="addOption">{{ buttonLabel }}</button>
</template>

<script>
import vCheckboxes from "./v-checkboxes.vue";
export default {
  components: {
    vCheckboxes,
  },
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    isRequired: Boolean,
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    buttonLabel: {
      type: String,
      default: "Add",
    },
  },
  computed: {
    checkedValues: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  data() {
    return {
      newOption: null,
    };
  },
  methods: {
    addOption() {
      this.$emit("update:options", [...this.options, this.newOption]);
      this.newOption = "";
    },
  },
};
</script>

<style>
</style>