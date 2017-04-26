'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = hello;

var _convert = require('./convert');

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

console.log('Importing Index');

function hello() {
  var convert = new _convert2.default();

  return convert.hello();
}