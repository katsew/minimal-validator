"use strict";
const expect = require('chai').expect;
const mocha = require('mocha');
const HTMLValidator = require('../lib/html');


describe('Test HTMLValidator class', () => {
  it('should be HTMLValidator', () => {
    let validator = new HTMLValidator();
    expect(validator.constructor).to.be.equal(HTMLValidator);
  });

  it('should be invalid', () => {
    let validator = new HTMLValidator();
    let testStr = "<script>alert('hoge');</script>"
    expect(validator.validate(testStr)).to.be.false;
  })

  it('should be valid', () => {
    let validator = new HTMLValidator();
    let testStr = "alert('hogehoge');";
    expect(validator.validate(testStr)).to.be.true;
  })
  
});
