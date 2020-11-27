import '../../assets/style/main.scss'
import header from '../../components/header/component'
import main from '../../components/main/component'
import footer from '../../components/footer/component'

const tagName = 'div'
const template = `
      <div class="container custom_container">
        ${header}
        ${main}
        ${footer}
      </div>`

export default {
  tagName,
  innerHTML: template
}
