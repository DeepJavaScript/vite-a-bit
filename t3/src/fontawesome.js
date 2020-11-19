import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faFacebookSquare,
  faGooglePlusSquare, 
  faTwitterSquare
);

dom.i2svg();
