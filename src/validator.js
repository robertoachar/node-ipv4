export default class Validator {

  isNumber(value) {
    if (typeof value !== 'number') return false;

    return true;
  }

  isString(value) {
    if (typeof value !== 'string') return false;
    if (value.trim() === '') return false;

    return true;
  }

}
