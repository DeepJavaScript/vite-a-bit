// 引入全局樣式
import '../../assets/style/main.scss'

// 引入組件樣式
import header from '../../components/header/component'
import main from '../../components/main/component'
import footer from '../../components/footer/component'

// 生成 Home 樣式
const tagName = 'div'
const template = `
    ${header}
    ${main}
    ${footer}
`

export default {
  tagName,
  innerHTML: template
}
