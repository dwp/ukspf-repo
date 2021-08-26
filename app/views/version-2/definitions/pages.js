/**
 * Declarative definitions of pages within a user journey.
 */

const reviewPageDefinition = require('@dwp/govuk-casa/definitions/review-page');

module.exports = (casaApp, mountUrl) => {
  const pages = Object.create(null);

  /* -------------------------------------------------------- "trunk" journey */

  // The "task-list" has a custom handler, so we don't use page meta here

  pages['finish'] = {
    view: 'finish.njk',
    hooks: {
      pregather: (req, res, next) => {
        console.log(JSON.stringify(req.casa.journeyContext.getData(), null, 2));

        // Remember to clear the journey data once submitted
        casaApp.endSession(req).then(() => {
          res.status(302).redirect(`${mountUrl}what-happens-next`);
        }).catch((err) => {
          console.log(err);
          res.status(302).redirect(`${mountUrl}what-happens-next`);
        });
      },
    }
  };

  /* -------------------------------------------------- "each of these pages have their own single journey */

  pages['declaration'] = {
    view: 'pages/declaration.njk',
    reviewBlockView: 'review-blocks/declaration.njk',
    fieldValidators: require('./field-validators/declaration.js'),
  };


  pages['invitation-number'] = {
    view: 'pages/invitation-number.njk',
    reviewBlockView: 'review-blocks/invitation-number.njk',
    fieldValidators: require('./field-validators/invitation-number.js'),
  };

  pages['organisation-details'] = {
    view: 'pages/organisation-details.njk',
    reviewBlockView: 'review-blocks/organisation-details.njk',
    fieldValidators: require('./field-validators/organisation-details.js'),
  };

  pages['contact-details'] = {
    view: 'pages/contact-details.njk',
    reviewBlockView: 'review-blocks/contact-details.njk',
    fieldValidators: require('./field-validators/contact-details.js'),
  };

  pages['regulatory-body'] = {
    view: 'pages/regulatory-body.njk',
    reviewBlockView: 'review-blocks/regulatory-body.njk',
    fieldValidators: require('./field-validators/regulatory-body.js'),
  };

  pages['bank-details'] = {
    view: 'pages/bank-details.njk',
    reviewBlockView: 'review-blocks/bank-details.njk',
    fieldValidators: require('./field-validators/bank-details.js'),
  };

  pages['project-details-1'] = {
    view: 'pages/project-details-1.njk',
    reviewBlockView: 'review-blocks/project-details-1.njk',
    fieldValidators: require('./field-validators/project-details-1.js'),
  };

  pages['project-details-2'] = {
    view: 'pages/project-details-2.njk',
    reviewBlockView: 'review-blocks/project-details-2.njk',
    fieldValidators: require('./field-validators/project-details-2.js'),
  };

  pages['project-details-3'] = {
    view: 'pages/project-details-3.njk',
    reviewBlockView: 'review-blocks/project-details-3.njk',
    fieldValidators: require('./field-validators/project-details-3.js'),
  };

  pages['project-details-4'] = {
    view: 'pages/project-details-4.njk',
    reviewBlockView: 'review-blocks/project-details-4.njk',
    fieldValidators: require('./field-validators/project-details-4.js'),
  };

  pages['project-details-5'] = {
    view: 'pages/project-details-5.njk',
    reviewBlockView: 'review-blocks/project-details-5.njk',
    fieldValidators: require('./field-validators/project-details-5.js'),
  };

  pages['check-your-answers'] = {
    view: 'pages/check-your-answers.njk',
    reviewBlockView: 'review-blocks/check-your-answers.njk',
    fieldValidators: require('./field-validators/check-your-answers.js'),
  };

  pages['application-submitted'] = {
    view: 'pages/application-submitted.njk',
    reviewBlockView: 'review-blocks/application-submitted.njk',
    fieldValidators: require('./field-validators/application-submitted.js'),
  };

  /* -------------------------------------------------------- "redundent legacy pages to be removed at some point" */


  pages['dob'] = {
    view: 'pages/dob.njk',
    reviewBlockView: 'review-blocks/dob.njk',
    fieldValidators: require('./field-validators/dob.js'),
  };

  pages['shahed'] = {
    view: 'pages/shahed.njk',
    reviewBlockView: 'review-blocks/shahed.njk',
    fieldValidators: require('./field-validators/shahed.js'),
  };

    // fieldValidators: require('./field-validators/invitatiion-number.js'),


  /* -------------------------------------------------------- "books" journey */

  pages['action-books'] = {
    view: 'pages/action-books.njk',
    fieldValidators: require('./field-validators/books-generic.js'),
  };

  pages['thriller-books'] = {
    view: 'pages/thriller-books.njk',
    fieldValidators: require('./field-validators/books-generic.js'),
  };

  pages['horror-books'] = {
    view: 'pages/horror-books.njk',
    fieldValidators: require('./field-validators/books-generic.js'),
  };


  /* ------------------------------------------------------- Add review pages */

  // Review page that will be used on the "preliminary" journey
  pages['initial-review'] = reviewPageDefinition(pages);

  return pages;
};
