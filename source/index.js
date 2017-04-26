/* eslint-disable no-console */

console.log('Importing Index');

import Convert from './convert';

export function hello() {
  let convert = new Convert();

  return convert.hello();
}
