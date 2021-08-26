const { validationRules: r, simpleFieldValidation: sf } = require('@dwp/govuk-casa');

const fieldValidators = {
  tel: sf([
    r.optional,
  ])
};

module.exports = fieldValidators;
