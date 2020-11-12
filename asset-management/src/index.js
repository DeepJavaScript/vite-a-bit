import _ from 'lodash';

import './style.css';
import Icon from './webpack-icon.png';
import myXML from './data.xml';
import myCSV from './data.csv';
import myJSON from './data.json';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

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