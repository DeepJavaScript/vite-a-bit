// 創建 component
// ! 週末改用 vue 試試看
export function createComponent ({ tagName, innerHTML }) {
  const element = document.createElement(tagName)
  element.innerHTML = innerHTML
  return element
}