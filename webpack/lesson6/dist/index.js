'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

require('./repeat');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(tttest);

// will be transformed
var a = Math.pow(2, 2);
var fn = function fn(item) {
  return item == 2;
};

// will not
[1, 2, 3].findIndex(fn);
'abc'.includes('def');
(0, _assign2.default)({}, { a: 1 });

var promise = new _promise2.default();

// helpers
var name = 'js';
var language = (0, _defineProperty3.default)({}, name, 'es6');

// generator
function tttest() {
  return _regenerator2.default.wrap(function tttest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}