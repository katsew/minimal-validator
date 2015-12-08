"use strict";
const expect = require('chai').expect;
const mocha = require('mocha');
const MailValidator = require('../lib/mail');

describe('Test MailValidator class', () => {
  it('should be MailValidator', () => {
    let validator = new MailValidator();
    expect(validator.constructor).to.be.equal(MailValidator);
  });

  it('should be invalid', () => {
    let validator = new MailValidator();
    let testStr = "sample"
    expect(validator.validate(testStr)).to.be.false;
  });

  it('should be valid', () => {
    let validator = new MailValidator(/sample\@test\.com/);
    let testStr = "sample@test.com"
    expect(validator.validate(testStr)).to.be.true;
  });

  it('should be valid', () => {
    let validator = new MailValidator();
    let testStr = "sample@example.com";
    expect(validator.validate(testStr)).to.be.true;
  });

  it('should be valid', () => {
    let validator = new MailValidator();
    let testStr = "sample@hoge";
    expect(validator.validate(testStr)).to.be.true;
  });

});
