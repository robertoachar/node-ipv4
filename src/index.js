const IPv4 = require('./ipv4');
const validator = require('./validator');

module.exports.parse = (address, cidr, done) => {
  if (!validator.isIp(address)) {
    return done('Invalid address');
  }

  if (!validator.isCidr(cidr)) {
    return done('Invalid cidr');
  }

  const ipv4 = IPv4(address, cidr);

  return done(null, ipv4);
};
