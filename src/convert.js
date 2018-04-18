module.exports.toBinary = (value) => value.toString(2);

module.exports.toHexadecimal = (value) => value.toString(16).toUpperCase();

module.exports.toDecimal = (address) => {
  const octet = address.split('.');

  return ((+octet[0] * 256 + +octet[1]) * 256 + +octet[2]) * 256 + +octet[3];
};

module.exports.toBytes = (value) => {
  const octets = [];

  octets[0] = value & 255;
  octets[1] = (value >> 8) & 255;
  octets[2] = (value >> 16) & 255;
  octets[3] = (value >> 24) & 255;

  return `${octets[3]}.${octets[2]}.${octets[1]}.${octets[0]}`;
};

module.exports.toAddress = (value) => {
  const address = this.toBytes(value);
  const binary = this.toBinary(value);
  const hexadecimal = this.toHexadecimal(value);

  return { value, address, binary, hexadecimal };
};
