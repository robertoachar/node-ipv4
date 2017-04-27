import Convert from './convert';

export default class IP {

  constructor(ip) {
    this.value = ip;
    this.address = Convert.toBytes(this.value);
    this.binary = Convert.toBinary(this.value);
    this.hexadecimal = Convert.toHexadecimal(this.value);
  }
}
