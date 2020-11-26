import _ from 'lodash'

const pElement = createComponent({
  tagName: 'p',
  textContent: ['EveryTime', 'is', 'awesome', ',Chen'],
})

document.body.appendChild(pElement)

function createComponent ({ tagName, textContent }) {
  const space = ' '
  const element = document.createElement(tagName)
  element.textContent = _.join(textContent, space)
  return element
}
