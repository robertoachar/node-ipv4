const { toBinary, toBytes, toHexadecimal } = require('./convert');

module.exports = (value) => {
  const address = toBytes(value);
  const binary = toBinary(value);
  const hexadecimal = toHexadecimal(value);

  return { value, address, binary, hexadecimal };
};
