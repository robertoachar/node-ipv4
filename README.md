# node-ipv4

[![Build Status][travis-badge]][travis-badge-url]
[![Build Status][appveyor-badge]][appveyor-badge-url]
[![Dependency Status][david-badge]][david-badge-url]
[![devDependency Status][david-dev-badge]][david-dev-badge-url]
[![npm][npm-badge]][npm-badge-url]

> A package to calculate subnet masks.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Globally](#globally)
  - [Locally](#locally)
- [Documentation](#documentation)
- [Development](#development)
- [Author](#author)
- [License](#license)

## Prerequisites

* Install [Node.js](https://nodejs.org)
* Install [npm](https://www.npmjs.com/)

## Installation

There are two ways to install `node-ipv4`: globally and locally.

To install globally:

```bash
# Install globally
$ npm install -g node-ipv4

# Check installation
$ node-ipv4 --version
```

To install locally:

```bash
# Install locally
$ npm install --save node-ipv4

# Check installation
const ipv4 = require('node-ipv4');
```

## Usage

There are two ways to use `node-ipv4`: globally and locally.

### Globally

* ### `-V` or `--version`: output the version number
```bash
$ node-ipv4 --version
1.0.1
```

* ### `-h` or `--help`: output usage information
```bash
$ node-ipv4 --help

  Usage: cli [options]

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -i, --ip [ip]      IP Address
    -c, --cidr [cidr]  Cdir block
```

* ### `-i` or `--ip [ip: string]`: enter the IP address
* ### `-c` or `--cidr [ip: number]`: enter the CIDR block

```bash
# without alias
$ node-ipv4 --ip 192.168.1.1 --cidr 32

# with alias
$ node-ipv4 -i 192.168.1.1 -c 32

# output
IPv4 {
  cidr: 32,
  size: 1,
  address:
   Address {
     value: 3232235777,
     address: '192.168.1.1',
     binary: '11000000101010000000000100000001',
     hexadecimal: 'C0A80101' },
  netmask:
   Address {
     value: 4294967295,
     address: '255.255.255.255',
     binary: '11111111111111111111111111111111',
     hexadecimal: 'FFFFFFFF' },
  first:
   Address {
     value: 3232235777,
     address: '192.168.1.1',
     binary: '11000000101010000000000100000001',
     hexadecimal: 'C0A80101' },
  last:
   Address {
     value: 3232235777,
     address: '192.168.1.1',
     binary: '11000000101010000000000100000001',
     hexadecimal: 'C0A80101' } }
```

### Locally

```javascript
'use strict';

var ipv4 = require('node-ipv4');

ipv4.parse('192.168.1.1', 16, function (err, subnet) {
    if (err) return console.error(err);

    console.log(subnet);
});
```

### Output

```json
{
  "cidr": 16,
  "size": 65536,
  "address": {
    "value": 3232235777,
    "address": "192.168.1.1",
    "binary": "11000000101010000000000100000001",
    "hexadecimal": "C0A80101"
  },
  "netmask": {
    "value": 4294901760,
    "address": "255.255.0.0",
    "binary": "11111111111111110000000000000000",
    "hexadecimal": "FFFF0000"
  },
  "first": {
    "value": 3232235520,
    "address": "192.168.0.0",
    "binary": "11000000101010000000000000000000",
    "hexadecimal": "C0A80000"
  },
  "last": {
    "value": 3232301055,
    "address": "192.168.255.255",
    "binary": "11000000101010001111111111111111",
    "hexadecimal": "C0A8FFFF"
  }
}
```

## Documentation

### Class: Address
* `value`: {Number} Decimal value of an address
* `address`: {String} String value of an address
* `binary`: {String} Binary value of an address
* `hexadecimal`: {String} Hexadecimal value of an address

### Class: IPv4
* `cidr`: {Number} CIDR block
* `size`: {Number} Size of subnet
* `address`: {Object:Address} The input address
* `netmask`: {Object:Address} The subnet mask
* `first`: {Object:Address} The first address
* `last`: {Object:Address} The last address

### API: parse([address, cidr, callback])
* `address` {String} IP address
* `cidr` {Number} CIDR block
* `callback` {Function}
  * `err` {Error | null} Error
  * `ipv4` {Object:IPv4} Instance of `IPv4`

## Development

* Cloning the repo

```bash
$ git clone https://github.com/robertoachar/node-ipv4.git
```

* Installing dependencies

```bash
$ npm install
```

* Linting code

```bash
$ npm run lint
```

* Running unit tests

```bash
$ npm test
```

## Author
[Roberto Achar](https://twitter.com/RobertoAchar)

## License
[MIT](https://github.com/robertoachar/node-ipv4/blob/master/LICENSE)

[travis-badge]: https://travis-ci.org/robertoachar/node-ipv4.svg?branch=master
[travis-badge-url]: https://travis-ci.org/robertoachar/node-ipv4
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/sorbway8eupp739h?svg=true
[appveyor-badge-url]: https://ci.appveyor.com/project/robertoachar/node-ipv4
[david-badge]: https://david-dm.org/robertoachar/node-ipv4.svg
[david-badge-url]: https://david-dm.org/robertoachar/node-ipv4
[david-dev-badge]: https://david-dm.org/robertoachar/node-ipv4/dev-status.svg
[david-dev-badge-url]: https://david-dm.org/robertoachar/node-ipv4?type=dev
[npm-badge]: https://img.shields.io/npm/v/node-ipv4.svg
[npm-badge-url]: https://www.npmjs.com/package/node-ipv4
