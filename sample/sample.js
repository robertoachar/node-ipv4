const lib = require('../src/index');

lib.parse('192.168.1.3', 32, (err, subnet) => {
  if (err) return console.error(err);

  console.log(subnet);
});
