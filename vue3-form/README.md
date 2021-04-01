# Vue 3 - Form

## [Demo](https://deepjavascript.github.io/vite-a-bit/vue3-form/louis/)

## Version

- [Native HTML form with Vue 3](https://github.com/DeepJavaScript/vite-a-bit/tree/20210115.louis.vue3-form.2/vue3-form)
- [Wrap with Vue 3 Component](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form)
  - [v-input](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-input.vue)
  - [v-radios](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-radios.vue)
  - [v-checkboxes](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-checkboxes.vue)
  - [v-addable-checkboxes](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-addable-checkboxes.vue)
  - [v-tags](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-tags.vue)
  - [v-select](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-select.vue)
  - [v-password](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-password.vue)
  - [v-file-image](https://github.com/DeepJavaScript/vite-a-bit/tree/20210219.louis.vue3-form.3/vue3-form/src/components/v-file-image.vue)
- [Validate with Vee-Validate for Vue 3](https://github.com/DeepJavaScript/vite-a-bit/tree/20210312.louis.vue3-form.4/vue3-form)
  - [v-input](https://github.com/DeepJavaScript/vite-a-bit/tree/20210312.louis.vue3-form.4/vue3-form/src/components/v-input.vue)
  - [v-radios](https://github.com/DeepJavaScript/vite-a-bit/tree/20210312.louis.vue3-form.4/vue3-form/src/components/v-radios.vue)
  - [v-checkboxes](https://github.com/DeepJavaScript/vite-a-bit/tree/20210312.louis.vue3-form.4/vue3-form/src/components/v-checkboxes.vue)

- [Composition API](https://github.com/DeepJavaScript/vite-a-bit/tree/20210326.louis.vue3-form.5/vue3-form)
  - [useTag](https://github.com/DeepJavaScript/vite-a-bit/tree/20210326.louis.vue3-form.5/vue3-form/src/compositions/useTags.js) for [v-tags](https://github.com/DeepJavaScript/vite-a-bit/tree/20210326.louis.vue3-form.5/vue3-form/src/components/v-tags.vue)
  - [v-file-image](https://github.com/DeepJavaScript/vite-a-bit/tree/20210326.louis.vue3-form.5/vue3-form/src/components/v-file-image.vue)
  - [v-password](https://github.com/DeepJavaScript/vite-a-bit/tree/20210409.louis.vue3-form.6/vue3-form/src/components/v-password.vue)
  - [MyForm](https://github.com/DeepJavaScript/vite-a-bit/tree/20210409.louis.vue3-form.6/vue3-form/src/views/MyForm.vue)

---

## The Tricky

### checkbox 初始值與 non-required props

props 沒有設定 `required: true` 時，是可以傳入 null 的，
因此使用在 checkbox 時要小心，
checkbox 的初始值分別為 `null` 及 `[]` 時，會產生 `T/F` 及 `多選` 的差別。

```
<template>
	<input type="checkbox" value="ONE" :checked="modelValue" />
	<input type="checkbox" value="TWO" :checked="modelValue" />
	{{ modelValue }}
</template>

<script>
export default {
	props: {
		modelValue: Array,
	},
}
</script>
```

---

## Problems

### `Math.random()`

情況如下，
當 ComponentA 被複用時，不同 instance 的 default value 在 Random() 都會產生出同一個值

```javascript=
// ComponentA

export default {
	props: {
		name: {
			type: String,
			default: Math.random().toString(36),
		},
	},
}
```

![img](https://i.imgur.com/QTqTNBZ.png)

### 對 props 的操作

Component 可以直接在內部修改到 modelValue，
猜測是因為 JS 的物件是 Pass by reference

```
<template>
  <div>
    <span v-for="(tag, index) of modelValue" :key="index">
      <span>{{ tag }}</span>
      <span @click="removeTag(index)">&nbsp;ˣ</span>
      &nbsp;&nbsp;
    </span>
    <input type="text" v-model="newTag" @submit.prevent="addTag" />
    <button type="button" @click="addTag">+</button>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      newTag: "",
    };
  },
  methods: {
    // 👇
    addTag() {
      // 直接修改到 modelValue
      this.modelValue.push(this.newTag);
      
      // Console 顯示預期中的錯誤
      // Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'modelValue'
      this.modelValue = [...this.modelValue, this.newTag];
      this.newTag = "";
    },
    removeTag(index) {
      // 直接修改到 modelValue
      this.modelValue.splice(index, 1);
      console.log(this.modelValue);
    },
  },
};
</script>

```

---

## 疑問

- Vee-Validate
  - [Validatio Metadata](https://vee-validate.logaretm.com/v4/guide/components/validation#validation-metadata)
- Composition API
  - [Template Refs](https://v3.vuejs.org/guide/composition-api-template-refs.html)
- Reactivity
  - [Ref Unwrapping](https://v3.vuejs.org/guide/reactivity-fundamentals.html#ref-unwrapping)
  - [Side Effect Invalidation](https://v3.vuejs.org/guide/reactivity-computed-watchers.html#side-effect-invalidation)
- 對 Composition 傳入 props.property
  - [useTag](https://github.com/DeepJavaScript/vite-a-bit/tree/20210409.louis.vue3-form.bug2/vue3-form/src/compositions/useTags.js) for [v-tags](https://github.com/DeepJavaScript/vite-a-bit/tree/20210409.louis.vue3-form.bug2/vue3-form/src/components/v-tags.vue)
    如果把傳入的參數從 props 改成 props.modelValue (type: Array)
    會造成新增有問題
    ```
      // v-tags.vue
      useTags(props.modelValue, context);
    ```
    ```
      // useTags.js
      export default function useTags({ modelValue }, { emit }) {
        console.log(modelValue); // modelValue: undefined

        const addTag = () => {
          const tagStr = newTag.value.trim();
          if (tagStr) emit('update:modelValue', [...modelValue, tagStr]);
          newTag.value = '';
        }
      }
    ```

    Error message
    ```
      [Vue warn]: Unhandled error during execution of native event handler 
      at <VTags modelValue= ["#VITEABIT"] onUpdate:modelValue=fn label="標籤"  ... > 

      Uncaught TypeError: modelValue is not iterable
    ```