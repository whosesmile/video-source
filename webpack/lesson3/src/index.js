import './style.css';
import R from 'ramda';
import logger from './logger';

function component() {
  var element = document.createElement('div');
  element.innerHTML = R.toUpper('hello webpack');
  element.classList.add('large');

  var button = document.createElement('button');
  button.addEventListener('click', logger, false);
  button.innerHTML = 'WEBPACK';
  button.classList.add('button');
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());
