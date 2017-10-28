module.exports.toBinary = (value) => {
  return value.toString(2);
};

module.exports.toBytes = (value) => {
  let address = value % 256;

  for (let i = 1; i <= 3; i++) {
    value = Math.floor(value / 256);

    address = value % 256 + '.' + address;
  }

  return address;
};

module.exports.toDecimal = (address) => {
  const octet = address.split('.');

  return ((((((+octet[0]) * 256) + (+octet[1])) * 256) + (+octet[2])) * 256) + (+octet[3]);
};

module.exports.toHexadecimal = (value) => {
  return value.toString(16).toUpperCase();
};
