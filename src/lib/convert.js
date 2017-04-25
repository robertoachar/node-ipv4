'use strict';

/**
 * toBinary
 */
function toBinary(value) {
  return value.toString(2);
}

/**
 * toBytes
 */
function toBytes(value) {
  let address = value % 256;

  for (let i = 1; i <= 3; i++) {
    value = Math.floor(value / 256);

    address = value % 256 + '.' + address;
  }

  return address;
}

/**
 * toDecimal
 */
function toDecimal(address) {
  const octet = address.split('.');

  return ((((((+octet[0]) * 256) + (+octet[1])) * 256) + (+octet[2])) * 256) + (+octet[3]);
}

/**
 * toHexadecimal
 */
function toHexadecimal(value) {
  return value.toString(16).toUpperCase();
}

/**
 * Exports
 */
module.exports.toBinary = toBinary;
module.exports.toBytes = toBytes;
module.exports.toDecimal = toDecimal;
module.exports.toHexadecimal = toHexadecimal;
