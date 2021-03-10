<template>
  <div>
		<span>{{ label }}: </span>
    <span v-for="(tag, index) of modelValue" :key="index">
      <span>{{ tag }}</span>
      <span @click="removeTag(index)">&nbsp;ˣ</span>
      &nbsp;&nbsp;
    </span>
    <input type="text" v-model="newTag" @submit.prevent="addTag" @keypress="onEnter" />
    <button type="button" @click="addTag">{{ buttonLabel }}</button>
  </div>
</template>

<script>
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
  data() {
    return {
      newTag: "",
    };
  },
  methods: {
		onEnter(event) {
			if (event.keyCode === 13) this.addTag();
		},
    addTag() {
			const newTag = this.newTag.trim();
			if (newTag) this.modelValue.push(newTag);
      this.newTag = "";
    },
    removeTag(index) {
      this.modelValue.splice(index, 1);
    },
  },
};
</script>
