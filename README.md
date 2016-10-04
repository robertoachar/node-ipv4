# node-ipv4
A package to calculate subnet masks.

## Table of contents

- [Quick start](#quick-start)
- [Quick examples](#quick-examples)
- [Author](#author)
- [License](#license)

## Quick start

- Clone de repo: `git clone https://github.com/robertoachar/node-ipv4.git`
- Install with [npm](https://www.npmjs.com): `npm install node-ipv4`
- Install with [bower](https://bower.io): `bower install node-ipv4`

### What's included

```
node-ipv4/
├── lib/
│   ├── address.js
│   ├── convert.js
│   ├── ipv4.js
└── index.js
```

## Quick examples

## Node.js

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

## Author

Roberto Achar

## License

[MIT](http://opensource.org/licenses/MIT)