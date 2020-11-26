import _ from 'lodash'
import './style.css'
import image from './image.jpg'
import Data from './data.xml'
import Notes from './data.csv'
import { printMyModule } from './myModule/myModule'

const pElement = createComponent({
  tagName: 'p',
  textContent: ['EveryTime', 'is', 'awesome', ',Chen'],
  className: 'hello'
})
const imgElement = createImg(image)

document.body.appendChild(pElement)
document.body.appendChild(imgElement)
console.log(Data)
console.log(Notes)
printMyModule()

function createComponent ({ tagName, textContent, className }) {
  const space = ' '
  const element = document.createElement(tagName)
  element.textContent = _.join(textContent, space)
  element.classList.add(className)
  return element
}

function createImg(imageFile) {
  const image = new Image()
  image.src = imageFile
  return image
}
