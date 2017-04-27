import IPv4 from './ipv4';
import Validator from './validator';

export function parse(address, cidr, done) {

  let validator = new Validator();

  const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

  if (!validator.isString(address)) {
    return done('Address is not a string');
  }

  const match = address.match(regex);

  if (!match) {
    return done('Invalid address');
  }

  if (!validator.isNumber(cidr)) {
    return done('Cidr is not a number');
  }

  if (cidr < 0 || cidr > 32) {
    return done('Invalid cidr');
  }

  const ipv4 = new IPv4(address, cidr);

  if (done) return done(null, ipv4);
}
