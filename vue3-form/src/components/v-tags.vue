<template>
  <div>
    <span>{{ label }}: </span>
    <span v-for="(tag, index) of modelValue" :key="index">
      <span>{{ tag }}</span>
      <span @click="removeTag(index)">&nbsp;ˣ</span>
      &nbsp;&nbsp;
    </span>
    <input
      type="text"
      v-model="newTag"
      @submit.prevent="addTag"
      @keypress.enter.prevent="addTag"
    />
    <button type="button" @click="addTag">{{ buttonLabel }}</button>
  </div>
</template>

<script>
import useTags from "../compositions/useTags";

export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      default: "Add",
    },
  },
  setup(props, context) {
    const { newTag, addTag, removeTag } = useTags(props.modelValue, context);
    return { newTag, addTag, removeTag };
  },
};
</script>
