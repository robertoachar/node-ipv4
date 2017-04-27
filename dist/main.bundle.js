module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Convert = function () {
  function Convert() {
    _classCallCheck(this, Convert);
  }

  _createClass(Convert, null, [{
    key: 'toBinary',
    value: function toBinary(value) {
      return value.toString(2);
    }
  }, {
    key: 'toBytes',
    value: function toBytes(value) {
      var address = value % 256;

      for (var i = 1; i <= 3; i++) {
        value = Math.floor(value / 256);

        address = value % 256 + '.' + address;
      }

      return address;
    }
  }, {
    key: 'toDecimal',
    value: function toDecimal(address) {
      var octet = address.split('.');

      return ((+octet[0] * 256 + +octet[1]) * 256 + +octet[2]) * 256 + +octet[3];
    }
  }, {
    key: 'toHexadecimal',
    value: function toHexadecimal(value) {
      return value.toString(16).toUpperCase();
    }
  }]);

  return Convert;
}();

exports.default = Convert;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ip = __webpack_require__(3);

var _ip2 = _interopRequireDefault(_ip);

var _convert = __webpack_require__(0);

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IPv4 = function IPv4(address, cidr) {
  _classCallCheck(this, IPv4);

  var MAX_CIDR = 32;

  var _address = _convert2.default.toDecimal(address);
  var _cidr = cidr > 0 ? cidr : MAX_CIDR;
  var _size = Math.pow(2, MAX_CIDR - _cidr);
  var _netmask = Math.pow(2, MAX_CIDR) - _size;
  var _first = (_address & _netmask) >>> 0;
  var _last = (_address | ~_netmask) >>> 0;

  this.cidr = _cidr;
  this.size = _size;
  this.address = new _ip2.default(_address);
  this.netmask = new _ip2.default(_netmask);
  this.first = new _ip2.default(_first);
  this.last = new _ip2.default(_last);
};

exports.default = IPv4;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, [{
    key: 'isNumber',
    value: function isNumber(value) {
      if (typeof value !== 'number') return false;

      return true;
    }
  }, {
    key: 'isString',
    value: function isString(value) {
      if (typeof value !== 'string') return false;
      if (value.trim() === '') return false;

      return true;
    }
  }]);

  return Validator;
}();

exports.default = Validator;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _convert = __webpack_require__(0);

var _convert2 = _interopRequireDefault(_convert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IP = function IP(ip) {
  _classCallCheck(this, IP);

  this.value = ip;
  this.address = _convert2.default.toBytes(this.value);
  this.binary = _convert2.default.toBinary(this.value);
  this.hexadecimal = _convert2.default.toHexadecimal(this.value);
};

exports.default = IP;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;

var _ipv = __webpack_require__(1);

var _ipv2 = _interopRequireDefault(_ipv);

var _validator = __webpack_require__(2);

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(address, cidr, done) {

  var validator = new _validator2.default();

  var regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

  if (!validator.isString(address)) {
    return done('Address is not a string');
  }

  var match = address.match(regex);

  if (!match) {
    return done('Invalid address');
  }

  if (!validator.isNumber(cidr)) {
    return done('Cidr is not a number');
  }

  if (cidr < 0 || cidr > 32) {
    return done('Invalid cidr');
  }

  var ipv4 = new _ipv2.default(address, cidr);

  if (done) return done(null, ipv4);
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map