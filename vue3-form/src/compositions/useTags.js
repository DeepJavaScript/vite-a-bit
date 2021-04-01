import { ref } from "@vue/reactivity";

export default function useTags({ modelValue }, { emit }) {
	console.log(modelValue); // modelValue: undefined

	const newTag = ref("");

	const addTag = () => {
		const tagStr = newTag.value.trim();
		if (tagStr) emit('update:modelValue', [...modelValue, tagStr]);
		newTag.value = '';
	}

	const removeTag = (index) => {
		emit('update:modelValue', modelValue.filter(((str, i) => i != index)));
	}

	const onEnter = (event) => {
		if (event.keyCode === 13) addTag();
	}

	return {
		newTag,
		addTag,
		removeTag,
		onEnter,
	};
}