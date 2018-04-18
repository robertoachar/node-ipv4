/* eslint no-bitwise: 0 */

const Address = require('./address');
const { toDecimal } = require('./convert');

const MAX_CIDR = 32;

module.exports = (ip, cidr) => {
  const address = toDecimal(ip);
  const size = 2 ** (MAX_CIDR - cidr);
  const netmask = 2 ** MAX_CIDR - size;
  const first = (address & netmask) >>> 0;
  const last = (address | ~netmask) >>> 0;

  return {
    cidr,
    size,
    address: Address(address),
    netmask: Address(netmask),
    first: Address(first),
    last: Address(last)
  };
};
