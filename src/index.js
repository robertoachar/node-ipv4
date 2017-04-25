'use strict';

/**
 * Dependencies
 */
const IPv4 = require('./lib/ipv4');

/**
 * Constants
 */
const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

/**
 * Parse
 */
function parse(address, cidr, done) {
  if (!isString(address)) {
    return done('Address is not a string');
  }

  const match = address.match(regex);

  if (!match) {
    return done('Invalid address');
  }

  if (!isNumber(cidr)) {
    return done('Cidr is not a number');
  }

  if (cidr < 0 || cidr > 32) {
    return done('Invalid cidr');
  }

  var ipv4 = new IPv4(address, cidr);

  if (done) return done(null, ipv4);
}

/**
 * isNumber
 */
function isNumber(value) {
  if (typeof value !== 'number') return false;

  return true;
}

/**
 * isString
 */
function isString(value) {
  if (typeof value !== 'string') return false;
  if (value.trim() === '') return false;

  return true;
}

/**
 * Exports
 */
module.exports.parse = parse;
