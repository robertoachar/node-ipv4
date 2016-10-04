'use strict';

/**
 * Dependencies
 */
var convert = require('./convert');

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
