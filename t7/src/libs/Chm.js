// chm = chris dom

export default function ({ el, template }) {
  let element = document.body.querySelector(el);
  if (!element) element = document.createElement("template");

  element.innerHTML = template;


  this.toString = function() {
    return element.innerHTML;
  }
}