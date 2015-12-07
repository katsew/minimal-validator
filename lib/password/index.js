"use strict";
const Validator = require('../base');
const VALID_REGEXP = {};

VALID_REGEXP["WEAK"] = /^[a-z\d]{8,15}$/i;
VALID_REGEXP["NORMAL"] = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,15}$/i;
VALID_REGEXP["STRONG"] = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,15}$/;
VALID_REGEXP["STRONGER"] = /^(?=.*?[a-z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,15}$/i;

class PasswordValidator extends Validator {
  constructor(option) {
    super(option);
    if (/WEAK|NORMAL|STRONG|STRONGER/.test(option))
      this.validator = VALID_REGEXP[option];
    else
      this.validator = VALID_REGEXP["NORMAL"];
  }
  validate(password, confirm) {
    if (this.validate.length !== arguments.length)
      return super.validate(password);
    else
      return ((password === confirm) && this.validator.test(password));
  }
  static validate(v) {
    return VALID_REGEXP["NORMAL"].test(v);
  }
}

module.exports = PasswordValidator;
