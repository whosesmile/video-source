import './style.less';
import logger from './logger';
import hmr from './hmr';

function component() {
  var element = document.createElement('div');
  element.innerHTML = 'hello webpack'.toUpperCase();
  element.classList.add('large');

  var button = document.createElement('button');
  button.addEventListener('click', logger, false);
  button.innerHTML = 'WEBPACK';
  button.classList.add('button');
  button.classList.add('box');
  element.appendChild(button);

  return element;
}

var element = component();
document.body.appendChild(element);

// HMR DEMO
var button = document.querySelector('button');
var append = function() { element.appendChild(hmr()); };
button.addEventListener('click', append, false);

if (module.hot) {
  module.hot.accept('./hmr');
}
