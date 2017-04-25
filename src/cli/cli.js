#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * Dependencies
 */
const pkg = require('../../package.json');
const program = require('commander');
const ipv4 = require('../index');

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
