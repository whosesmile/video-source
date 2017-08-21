import './style.css';
import R from 'ramda';
import img from './fox.jpg';

function component() {
  var element = document.createElement('div');
  element.innerHTML = R.toUpper('hello webpack');

  element.classList.add('large');

  var image = new Image();
  image.src = img;

  element.appendChild(image);
  return element;
}

document.body.appendChild(component());
