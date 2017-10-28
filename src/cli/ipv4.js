#!/usr/bin/env node

/* eslint no-console: 0 */

const program = require('commander');

const ipv4 = require('../index');
const pkg = require('../../package.json');

program
  .version(pkg.version)
  .option('-i, --ip [ip]', 'IP Address')
  .option('-c, --cidr [cidr]', 'Cdir block')
  .parse(process.argv);

if (program.ip && program.cidr) {
  ipv4.parse(program.ip, +program.cidr, (err, address) => {
    if (err) return console.error(err);

    console.log(address);
  });
}
else {
  program.help();
}
