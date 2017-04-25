'use strict';

/**
 * Dependencies
 */
const convert = require('./convert');

/**
 * Constructor
 */
function Address(value) {
  this.value = value;
  this.address = convert.toBytes(value);
  this.binary = convert.toBinary(value);
  this.hexadecimal = convert.toHexadecimal(value);
}

/**
 * Exports
 */
module.exports = Address;
