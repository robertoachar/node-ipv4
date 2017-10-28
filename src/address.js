const convert = require('./convert');

function Address(value) {
  this.value = value;
  this.address = convert.toBytes(value);
  this.binary = convert.toBinary(value);
  this.hexadecimal = convert.toHexadecimal(value);
}

module.exports = Address;
