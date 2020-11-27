import '../../node_modules/swiper/swiper-bundle.min.css';
import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../scss/main.scss';
import 'swiper';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/js/all.js';
import './script.js';

if (module.hot) {
  module.hot.accept('./script.js', function() {
    console.log('喔喔喔喔喔好棒窩😯');
 })
}
