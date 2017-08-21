import R from 'ramda';

function component() {
  var element = document.createElement('div');
  element.innerHTML = R.toUpper('hello webpack');

  return element;
}

document.body.appendChild(component());
