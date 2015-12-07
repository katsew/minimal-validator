"use strict";
const expect = require('chai').expect;
const mocha = require('mocha');
const Validator = require('../lib/base');

describe('Test validator class', () => {

  it('should be Validator', () => {
    let validator = new Validator();
    expect(validator.constructor).to.be.equal(Validator);
  });

  it('should be undefined', () => {
    let validator = new Validator();
    expect(validator.validator).to.be.undefined;
  });

  it('should be valid', () => {
    let validator = new Validator(/hoge/);
    let testStr = "hoge";
    expect(validator.validate(testStr)).to.be.equal(true);
  });

  it('should be invalid', () => {
    let validator = new Validator(/hoge/);
    let testStr = "piyo";
    expect(validator.validate(testStr)).to.be.equal(false);
  });

});
