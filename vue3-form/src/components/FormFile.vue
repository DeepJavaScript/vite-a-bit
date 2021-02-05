<template>
  <div class="form-file form-group">
    <label for="image">上傳圖片 (限圖片)</label>
    <input type="file" id="image" ref="input" @change="uploadFile" />

    <div class="preview-image">
      <span>{{ previewImage.name }}</span>
      <img :src="previewImage.url" alt="圖片" />
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';

export default {
  name: 'FormFile',
  emits: ['update:file'],
  props: {
    file: {
      type: Object,
      defualt: null
    }
  },
  setup(props, { emit }) {
    const input = ref(null);
    const previewImage = reactive({
      name: '',
      url: ''
    });

    watch(
      () => props.file,
      () => {
        if (props.file === null) resetFile();
      }
    );

    function uploadFile(event) {
      const fileObject = event.target.files[0];
      previewImage.name = fileObject.name;
      previewImage.url = URL.createObjectURL(fileObject);
      emit('update:file', fileObject);
    }

    function resetFile() {
      input.value.value = '';
      console.log('reset input file');
      resetPreviewImage();
    }

    function resetPreviewImage() {
      previewImage.name = '';
      previewImage.url = '';
    }

    return {
      input,
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
