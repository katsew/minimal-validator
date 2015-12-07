"use strict";

class Validator {
  constructor(option) {
    this.validator = option;
  }
  validate(v) {
    return this.validator.test(v);
  }
};

module.exports = Validator;
