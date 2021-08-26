const { validationRules: r, simpleFieldValidation: sf } = require('@dwp/govuk-casa');

const fieldValidators = {
  shahedCheck: sf([
    r.optional
  ])
};

module.exports = fieldValidators;
