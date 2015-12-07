"use strict";

const Validator = require('../base');
const REGEXP_HTML = /^(?!.*<("[^"]*"|'[^']*'|[^'">])*>)/g;

class HTMLValidator extends Validator {
  constructor(option) {
    super(option);
    if (option == null) {
      this.validator = REGEXP_HTML;
    }
  }
  validate(v) {
    return super.validate(v);
  }
  static validate(v) {
    return REGEXP_HTML.test(v);
  }
};

module.exports = HTMLValidator;
