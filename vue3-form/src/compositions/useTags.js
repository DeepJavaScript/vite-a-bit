import { ref } from "@vue/reactivity";

export default function useTags(props, { emit }) {
	const newTag = ref("");

	const addTag = () => {
		const tagStr = newTag.value.trim();
		if (tagStr) emit('update:modelValue', [...props.modelValue, tagStr]);
		newTag.value = '';
	}

	const removeTag = (index) => {
		emit('update:modelValue', props.modelValue.filter(((str, i) => i != index)));
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