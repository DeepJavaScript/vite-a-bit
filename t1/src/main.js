// 樣式重置
import './assets/style/reset.css'

// fontawesome 資源
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faGooglePlusSquare, faFacebookSquare, faTwitterSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'

// 組件
import { createArticleComponent } from './component/Article/article'
import { createNavbarComponent } from './component/Navbar/navbar'
import { createFooterComponent } from './component/footer/footer'

// 頁面渲染組件
document.body.appendChild(createNavbarComponent())
document.body.appendChild(createArticleComponent())
document.body.appendChild(createFooterComponent())

// fontawesome
library.add(faGooglePlusSquare)
library.add(faFacebookSquare)
library.add(faTwitterSquare)
library.add(faPinterestSquare)

// fontawesome 替換 fontawesome icon 函式
dom.watch()
