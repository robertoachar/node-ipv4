/* eslint no-console: 0 */

const lib = require('../src/index');

lib.parse('192.168.1.1', 32, (err, subnet) => {
  if (err) return console.error(err);

  console.log(subnet);
});
