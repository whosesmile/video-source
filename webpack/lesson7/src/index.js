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

// NODE_ENV
function isCrushed() {}

if (
  process.env.NODE_ENV !== 'production' &&
  typeof isCrushed.name === 'string' &&
  isCrushed.name !== 'isCrushed'
) {
  console.warning(
    'You are currently using minified code outside of NODE_ENV === \'production\'. ' +
    'This means that you are running a slower development build of Redux. ' +
    'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
    'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' +
    'to ensure you have the correct code for your production build.'
  )
}
