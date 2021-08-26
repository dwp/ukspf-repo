/**
 * This simply collates all of journeys together in an array.
 */

const { Plan } = require('@dwp/govuk-casa');

module.exports = (router, mountUrl) => {
  const plan = new Plan();

  require('./journeys/trunk.js')(plan);
  require('./journeys/organisation.js')(plan);
  require('./journeys/invitation-number.js')(plan);
  require('./journeys/regulatory-body.js')(plan);
  require('./journeys/bank-details.js')(plan);
  require('./journeys/project-details-1.js')(plan);
  require('./journeys/project-details-2.js')(plan);
  require('./journeys/project-details-3.js')(plan);
  require('./journeys/project-details-4.js')(plan);
  require('./journeys/project-details-5.js')(plan);
  require('./journeys/check-your-answers.js')(plan);
  require('./journeys/application-submitted.js')(plan);
  require('./journeys/preliminary.js')(plan);
  require('./journeys/books.js')(plan);
  require('./journeys/plan1.js')(plan);
  require('./journeys/preliminary/planshahed/plan1.js')(plan);
  require('./journeys/preliminary/planshahed/plandob.js')(plan);

  return plan;
};
