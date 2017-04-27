import IP from './ip';
import Convert from './convert';

export default class IPv4 {

  constructor(address, cidr) {
    const MAX_CIDR = 32;

    const _address = Convert.toDecimal(address);
    const _cidr = cidr > 0 ? cidr : MAX_CIDR;
    const _size = Math.pow(2, MAX_CIDR - _cidr);
    const _netmask = Math.pow(2, MAX_CIDR) - _size;
    const _first = (_address & _netmask) >>> 0;
    const _last = (_address | ~_netmask) >>> 0;

    this.cidr = _cidr;
    this.size = _size;
    this.address = new IP(_address);
    this.netmask = new IP(_netmask);
    this.first = new IP(_first);
    this.last = new IP(_last);
  }
}
