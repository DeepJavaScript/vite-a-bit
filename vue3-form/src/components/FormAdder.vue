<template>
  <fieldset class="form-adder">
    <legend>{{ title }}</legend>

    <slot :items="items" />

    <div class="form-group">
      <input
        type="text"
        ref="input"
        v-model.trim="inputItem"
        @input="onInput($event.target.value)"
        @keyup.enter="addOptions(inputItem)"
      />
      <button
        type="button"
        class="form-adder-add"
        :disabled="inputItem.length === 0"
        @click="addOptions(inputItem)"
      >
        {{ addText }}
      </button>
      <span v-if="error" class="form-adder-error">{{ error }}</span>
    </div>
  </fieldset>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FormAdder',
  emits: {
    'update:items': payload => Array.isArray(payload)
  },
  props: {
    title: {
      type: String,
      required: true
    },
    addText: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const input = ref(null);

    const inputItem = ref('');
    const error = ref('');

    function addOptions(item) {
      if (item.length === 0) return;

      if (props.items.includes(item)) {
        error.value = '已重複';
        input.value.focus();
        return;
      }

      emit('update:items', [...props.items, item]);
      inputItem.value = '';
      input.value.focus();
    }

    function onInput(value) {
      if (props.items.includes(value)) {
        error.value = '已重複';
      } else {
        error.value = '';
      }
    }

    return {
      input,
      inputItem,
      error,

      addOptions,
      onInput
    };
  }
};
</script>

<style lang="scss" scoped>
.form-adder {
  &-error {
    margin-left: 6px;

    color: red;
  }
}
</style>
