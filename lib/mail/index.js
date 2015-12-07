"use strict";
const Validator = require('../base');
const REGEXP_MAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;

class MailValidator extends Validator {
  constructor(option) {
    super(option)
    if (option == null)
      this.validator = REGEXP_MAIL;
  }
  validate(v) {
    return super.validate(v);
  }
  static validate(v) {
    return REGEXP_MAIL.test(v);
  }
}

module.exports = MailValidator;
