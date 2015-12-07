"use strict";
const expect = require('chai').expect;
const mocha = require('mocha');
const PasswordValidator = require('../lib/password');

describe('Test PasswordValidator class', () => {
  it('should be PasswordValidator', () => {
    let validator = new PasswordValidator();
    expect(validator.constructor).to.be.equal(PasswordValidator);
  });

  it('should be invalid', () => {
    let validator = new PasswordValidator();
    let testStr = "password"
    expect(validator.validate(testStr)).to.be.false;
  });

  it('should be valid', () => {
    let validator = new PasswordValidator("WEAK");
    let testStr = "password";
    expect(validator.validate(testStr)).to.be.true;
  });

  it('should be valid', () => {
    let validator = new PasswordValidator("NORMAL");
    let testStr = "abcd1234";
    expect(validator.validate(testStr)).to.be.true;
  });

  it('should be valid', () => {
    let validator = new PasswordValidator("STRONG");
    let testStr = "abcdABCD1234";
    expect(validator.validate(testStr)).to.be.true;
  });

  it('should be valid', () => {
    let validator = new PasswordValidator("STRONGER");
    let testStr = "abcdABCD1234!@&";
    expect(validator.validate(testStr)).to.be.true;
  });

  it('should be valid', () => {
    let validator = new PasswordValidator("STRONGER");
    let testStr = "abcdABCD1234!@&";
    let confirmStr = "abcdABCD1234!@&"
    expect(validator.validate(testStr, confirmStr)).to.be.true;
  });

  it('should be invalid', () => {
    let validator = new PasswordValidator("STRONGER");
    let testStr = "abcdABCD1234!@&";
    let confirmStr = "1234!@&"
    expect(validator.validate(testStr, confirmStr)).to.be.false;
  });

});
