import _ from 'lodash';

import './style.css';
import Icon from './webpack-icon.png';
import myXML from './data.xml';
import myCSV from './data.csv';
import myJSON from './data.json';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // Use Web fonts
  element.innerHTML += `
    <span class="my-icon">
      <i class="far fa-grin"></i>
    </span>
  `;

  console.log(myXML);
  console.log(myCSV);
  console.log(myJSON);

  return element;
}

document.body.appendChild(component());