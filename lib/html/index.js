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
};

module.exports = HTMLValidator;
