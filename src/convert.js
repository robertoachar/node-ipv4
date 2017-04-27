export default class Convert {

  static toBinary(value) {
    return value.toString(2);
  }

  static toBytes(value) {
    let address = value % 256;

    for (let i = 1; i <= 3; i++) {
      value = Math.floor(value / 256);

      address = value % 256 + '.' + address;
    }

    return address;
  }

  static toDecimal(address) {
    const octet = address.split('.');

    return ((((((+octet[0]) * 256) + (+octet[1])) * 256) + (+octet[2])) * 256) + (+octet[3]);
  }

  static toHexadecimal(value) {
    return value.toString(16).toUpperCase();
  }

}
