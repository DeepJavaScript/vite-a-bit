<template>
  <div>
    <label :for="name">{{ label }}: </label>
    <input
      type="file"
      accept="image/*"
      :name="name"
      :id="name"
      :multiple="multipleImage"
      @change="onImageChange"
    />
    <div v-if="imagePreview">
      <p>預覽</p>
      <img
        v-for="(image, index) of modelValue"
        :key="index"
        :src="image.url"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    multipleImage: Boolean,
    imagePreview: Boolean,
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const onImageChange = (event) => {
      const files = [...event.target.files];
      const images = files.map((file) => {
        return {
          url: URL.createObjectURL(file),
        };
      });
      emit("update:modelValue", images);
    }
    return { onImageChange };
  }
};
</script>

<style>
</style>