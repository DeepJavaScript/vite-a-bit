import _ from 'lodash';

import printMe from './print.js';

import './styles.css';

let counter = 0;

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = () => {
    counter++;
    console.log('counter:', counter);
    printMe();
  };

  element.appendChild(btn);

  return element;
}

// Store the element to re-render on print.js changes
let element = component();
document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');

//     document.body.removeChild(element);
//     // Re-render the "component" to update the click handler
//     element = component();
//     document.body.appendChild(element);
//   })
// }