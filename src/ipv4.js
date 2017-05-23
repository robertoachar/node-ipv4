'use strict';

var Address = require('./address');
var convert = require('./convert');

const MAX_CIDR = 32;

function IPv4(address, cidr) {
  var _address = convert.toDecimal(address);

  var _cidr = cidr > 0 ? cidr : MAX_CIDR;

  var _size = Math.pow(2, MAX_CIDR - _cidr);

  var _netmask = Math.pow(2, MAX_CIDR) - _size;

  var _first = (_address & _netmask) >>> 0;

  var _last = (_address | ~_netmask) >>> 0;

  this.cidr = _cidr;
  this.size = _size;
  this.address = new Address(_address);
  this.netmask = new Address(_netmask);
  this.first = new Address(_first);
  this.last = new Address(_last);
}

module.exports = IPv4;
