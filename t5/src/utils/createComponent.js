// 創建 component
export function createComponent ({ tagName, innerHTML }) {
  const element = document.createElement(tagName)
  element.innerHTML = innerHTML
  return element
}