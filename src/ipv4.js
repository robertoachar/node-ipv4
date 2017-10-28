const Address = require('./address');
const convert = require('./convert');

const MAX_CIDR = 32;

function IPv4(address, cidr) {
  const _address = convert.toDecimal(address);

  const _cidr = cidr;

  const _size = Math.pow(2, MAX_CIDR - _cidr);

  const _netmask = Math.pow(2, MAX_CIDR) - _size;

  const _first = (_address & _netmask) >>> 0;

  const _last = (_address | ~_netmask) >>> 0;

  this.cidr = _cidr;
  this.size = _size;
  this.address = new Address(_address);
  this.netmask = new Address(_netmask);
  this.first = new Address(_first);
  this.last = new Address(_last);
}

module.exports = IPv4;
