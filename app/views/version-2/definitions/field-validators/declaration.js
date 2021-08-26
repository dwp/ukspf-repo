const { validationRules: r, simpleFieldValidation: sf } = require('@dwp/govuk-casa');

const fieldValidators = {
  ready: sf([
    r.optional
  ])
};

module.exports = fieldValidators;
