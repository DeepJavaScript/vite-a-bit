<template>
  <div class="form-file form-group">
    <label for="image">上傳圖片 (限圖片)</label>
    <input type="file" id="image" @change="uploadFile" />

    <div class="preview-image">
      <span>{{ previewImage.name }}</span>
      <img :src="previewImage.url" alt="圖片" />
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  name: 'FormFile',
  emits: ['update:file'],
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const previewImage = reactive({
      name: '',
      url: ''
    });

    onMounted(() => {
      if (props.modelValue) {
        previewImage.url = URL.createObjectURL(props.modelValue);
      }
    });

    function uploadFile(event) {
      console.log(event);
      const fileObject = event.target.files[0];
      previewImage.name = fileObject.name;
      previewImage.url = URL.createObjectURL(fileObject);
      emit('update:file', fileObject);
    }

    return {
      previewImage,

      uploadFile
    };
  }
};
</script>

<style lang="scss" scoped>
.preview-image {
  width: 400px;

  img {
    max-width: 100%;
  }
}
</style>
