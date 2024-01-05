export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    }
    throw new TypeError('Code must be a string');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
