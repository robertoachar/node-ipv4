module.exports.isCidr = (cidr) => {
  if (typeof cidr !== 'number') return false;

  return (cidr >= 0 && cidr <= 32);
};

module.exports.isIp = (address) => {
  if (typeof address !== 'string') return false;
  if (address.trim() === '') return false;

  const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

  const match = address.match(regex);

  return (match ? true : false);
};
