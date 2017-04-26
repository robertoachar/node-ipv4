'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */

var Convert = function () {
  function Convert() {
    _classCallCheck(this, Convert);

    console.log('Importing Convert...');
  }

  _createClass(Convert, [{
    key: 'hello',
    value: function hello() {
      return 'Hello from Convert';
    }
  }]);

  return Convert;
}();

// export let hello = () => {
//   return 'Hello from convert';
// };

// 'use strict';

// /**
//  * toBinary
//  */
// function toBinary(value) {
//   return value.toString(2);
// }

// /**
//  * toBytes
//  */
// function toBytes(value) {
//   let address = value % 256;

//   for (let i = 1; i <= 3; i++) {
//     value = Math.floor(value / 256);

//     address = value % 256 + '.' + address;
//   }

//   return address;
// }

// /**
//  * toDecimal
//  */
// function toDecimal(address) {
//   const octet = address.split('.');

//   return ((((((+octet[0]) * 256) + (+octet[1])) * 256) + (+octet[2])) * 256) + (+octet[3]);
// }

// /**
//  * toHexadecimal
//  */
// function toHexadecimal(value) {
//   return value.toString(16).toUpperCase();
// }

// /**
//  * Exports
//  */
// module.exports.toBinary = toBinary;
// module.exports.toBytes = toBytes;
// module.exports.toDecimal = toDecimal;
// module.exports.toHexadecimal = toHexadecimal;


exports.default = Convert;