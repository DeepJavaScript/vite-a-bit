<template>
  <span class="v-tag" :class="{ hidden: !visible }">
    <slot />
    <span v-if="closable" class="v-tag-close" aria-label="close" @click="close">
      <CloseIcon />
    </span>
  </span>
</template>

<script>
import { ref } from 'vue';

import CloseIcon from '/@/assets/icon-close.svg';

export default {
  name: 'VTag',
  components: {
    CloseIcon
  },
  props: {
    closable: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: null
  },
  setup(props, { emit }) {
    const visible = ref(true);

    function close() {
      if (props.closable) {
        visible.value = false;
        emit('close');
      }
    }

    return {
      visible,
      close
    };
  }
};
</script>

<style lang="scss" scoped>
.v-tag {
  display: inline-block;
  padding: 0 7px;

  line-height: 20px;

  color: rgba(0, 0, 0, 0.65);
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 100%;
  }

  & + & {
    margin-left: 6px;
  }

  &.hidden {
    display: none;
  }

  &-close {
    margin-left: 4px;

    display: inline-block;
    vertical-align: middle;

    color: rgba(0, 0, 0, 0.45);

    cursor: pointer;

    svg {
      display: inline-block;
      vertical-align: -0.125em;
    }
  }
}
</style>
