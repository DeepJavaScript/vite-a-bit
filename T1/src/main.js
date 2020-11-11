// 樣式重置
import './assets/style/reset.css'
// fontawesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faGooglePlusSquare, faFacebookSquare, faTwitterSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'

// 加載組件
import { createArticleComponent } from './component/Article/article'
import { createNavbarComponent } from './component/Navbar/navbar'
import { createFooterComponent } from './component/footer/footer'

// 行不通
// library.add(faCamera)
// const camera = icon({ prefix: 'fas', iconName: 'camera' })

document.body.appendChild(createNavbarComponent())
document.body.appendChild(createArticleComponent())
document.body.appendChild(createFooterComponent())

library.add(faGooglePlusSquare)
library.add(faFacebookSquare)
library.add(faTwitterSquare)
library.add(faPinterestSquare)
dom.watch()