const { isCidr, isIp } = require('./validator');
const { toAddress, toDecimal } = require('./convert');

module.exports.parse = (ip, cidr, done) => {
  if (!isIp(ip)) {
    return done('Invalid ip');
  }

  if (!isCidr(cidr)) {
    return done('Invalid cidr');
  }

  const MAX_CIDR = 32;

  const address = toDecimal(ip);
  const size = 2 ** (MAX_CIDR - cidr);
  const netmask = 2 ** MAX_CIDR - size;
  const first = (address & netmask) >>> 0;
  const last = (address | ~netmask) >>> 0;

  const ipv4 = {
    cidr,
    size,
    address: toAddress(address),
    netmask: toAddress(netmask),
    first: toAddress(first),
    last: toAddress(last)
  };

  return done(null, ipv4);
};
