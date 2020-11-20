// 創建 component
// ! 改用 vue 試試
export function createComponent ({ tagName, innerHTML }) {
  const element = document.createElement(tagName)
  element.innerHTML = innerHTML
  return element
}