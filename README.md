# node-ipv4

> A package to calculate subnet masks.

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Author](#author)
- [License](#license)

## Prerequisites

This project have dependencies that require Node 4 or higher, together with NPM 3 or higher.

* Install [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/)

## Installation

```bash
$ npm install --save node-ipv4
```

## Usage

### Quick Example

```javascript
'use strict';

var ipv4 = require('node-ipv4');

ipv4.parse('192.168.1.1', 16, function (err, subnet) {
    if (err) console.error(err);

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

## Development

* Install dependencies

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
