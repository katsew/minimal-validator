[![Circle CI](https://circleci.com/gh/katsew/minimal-validator.svg?style=svg)](https://circleci.com/gh/katsew/minimal-validator)

# Minimal validator for Nodejs and Browser

This is a sample validator for sever/client JavaScript.
It includes html, password, mail validator.

# Usage

Please use with `require`, or `import` with Babel.

```

  const validator = require('minimal-validator');
  // If you do not give a RegExp argument, default RegExp applied.
  const mailValidator = new validator.mail(/mail\@email\.com/);

  mailValidator.validate("test") === false;
  mailValidator.validate("mail@email.com") === true;

```
