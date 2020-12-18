import './main.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faTwitterSquare,
  faPinterestSquare
} from '@fortawesome/free-brands-svg-icons';

// 加入所需的 icon
library.add(
  faFacebookSquare,
  faGooglePlusSquare,
  faTwitterSquare,
  faPinterestSquare
);

dom.i2svg({
  node: document.querySelector('.social')
});

console.log('load JS');