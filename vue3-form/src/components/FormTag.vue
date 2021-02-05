<template>
  <fieldset class="form-tag">
    <legend>標籤</legend>
    <ul class="form-tag-list">
      <li class="form-tag-item" v-for="tag in tags" :key="tag">
        <span class="form-tag-content">{{ tag }}</span>
        <button type="button" class="form-tag-remove" @click="removeTag(tag)">
          X
        </button>
      </li>
    </ul>
    <div class="form-group">
      <input
        type="text"
        ref="input"
        v-model="inputTag"
        @keyup.enter="addTag(inputTag)"
      />
      <button
        type="button"
        :disabled="inputTag.length === 0"
        @click="addTag(inputTag)"
      >
        加標籤
      </button>
      <span v-if="error" class="form-tag-error">{{ error }}</span>
    </div>
  </fieldset>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FormTag',
  emits: {
    'update:tags': payload => Array.isArray(payload)
  },
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const input = ref(null);
    const inputTag = ref('');
    const error = ref('');

    function addTag(tag) {
      if (tag.length === 0) return;

      if (props.tags.includes(tag)) {
        error.value = '已重複';
        input.value.focus();
        return;
      }

      emit('update:tags', [...props.tags, tag]);
      inputTag.value = '';
      error.value = '';
      input.value.focus();
    }

    function removeTag(tag) {
      emit(
        'update:tags',
        props.tags.filter(item => item !== tag)
      );
      error.value = '';
    }

    return {
      input,
      inputTag,
      error,

      addTag,
      removeTag
    };
  }
};
</script>

<style lang="scss" scoped>
.form-tag {
  &-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  &-content,
  &-remove {
    vertical-align: middle;
  }

  &-content {
    padding: 0 6px;
  }

  &-item {
    display: inline-block;

    line-height: 1.2;

    background-color: #ccc;

    & + & {
      margin-left: 10px;
    }
  }

  &-remove {
    display: inline-block;

    width: 24px;
    height: 24px;
    padding: 0;

    border: none;
    background-color: #eee;

    cursor: pointer;
  }

  &-error {
    margin-left: 6px;

    color: red;
  }
}
</style>
