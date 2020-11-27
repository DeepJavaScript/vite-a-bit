function defineComponent(name, template) {
  customElements.define(name,
    class extends HTMLElement {
      constructor() {
        super();
        this.outerHTML = template;
      }
    }
  );
}

export {
  defineComponent
};