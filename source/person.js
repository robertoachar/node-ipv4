/* eslint-disable no-console */

export default class Person {

  constructor() {
    this._name = 'Roberto Achar';
  }

  get name() {
    return this._name;
  }

  hello() {
    console.log(`Hello ${this._name}`);
  }

}
