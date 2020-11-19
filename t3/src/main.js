import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createComponent } from './libs/createComponent'

import Home from './views/Home/component'

document.body.appendChild(createComponent(Home))