'use strict';

const IPv4 = require('./ipv4');
const validator = require('./validator');

module.exports.parse = (address, cidr, done) => {
  if (!validator.isIp(address)) {
    return done('Invalid address');
  }

  if (cidr < 0 || cidr > 32) {
    return done('Invalid cidr');
  }

  const ipv4 = new IPv4(address, cidr);

  if (done) {
    return done(null, ipv4);
  }
};
