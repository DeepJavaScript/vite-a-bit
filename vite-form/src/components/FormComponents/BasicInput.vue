<template>
  <label :for="inputType">{{ labelText }}</label>
  <Field
    :type="inputType"
    :id="inputType"
    :value="value"
    :name="fieldName"
    :rules="isRequired"
    @change.prevent="handleChange($event.target.value)"
  />
  <ErrorMessage class="validation-message" :name="fieldName"></ErrorMessage>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'BasicInput',
  components: {
    Field,
    ErrorMessage
  },
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    labelText: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    },
    dataProperty: {
      type: String,
      required: true
    },
    fieldName: {
      type: String,
      default: ''
    }
  },
  emits: ['setProfile'],
  methods: {
    handleChange(payload) {
      let obj = {};
      obj[this.dataProperty] = payload;
      this.$emit('setProfile', obj);
    },
    isRequired(value) {
      return value ? true : '此欄位必填';
    }
  }

}
</script>

<style scoped>
.validation-message {
  display: block;
  color: red;
  margin-left: 5px;
}
</style>