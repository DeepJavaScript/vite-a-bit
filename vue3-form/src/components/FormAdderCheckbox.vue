<template>
  <fieldset class="form-adder-checkbox">
    <legend>{{ title }}</legend>

    <div class="form-adder-list">
      <div
        class="form-adder-item form-group"
        v-for="option in options"
        :key="option"
      >
        <input
          type="checkbox"
          :id="option"
          :value="option"
          v-model="adderCheckedItems"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>

    <div class="form-group">
      <input
        type="text"
        ref="input"
        v-model="inputItem"
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
import { ref, computed } from 'vue';

export default {
  name: 'FormAdderCheckbox',
  emits: {
    'update:options': payload => Array.isArray(payload),
    'update:checkedItems': payload => Array.isArray(payload)
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
    options: {
      type: Array,
      required: true
    },
    checkedItems: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const input = ref(null);
    const inputItem = ref('');
    const error = ref('');
    const adderCheckedItems = computed({
      get: () => props.checkedItems,
      set(value) {
        emit('update:checkedItems', value);
      }
    });

    function addOptions(item) {
      if (item.length === 0) return;

      if (props.options.includes(item)) {
        error.value = '已重複';
        input.value.focus();
        return;
      }

      emit('update:options', [...props.options, item]);
      inputItem.value = '';
      error.value = '';
      input.value.focus();
    }

    function removeItem(item) {
      emit(
        'update:options',
        props.items.filter(x => x !== item)
      );
      error.value = '';
    }

    return {
      input,
      inputItem,
      error,
      adderCheckedItems,

      addOptions,
      removeItem
    };
  }
};
</script>

<style lang="scss" scoped>
.form-adder {
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
