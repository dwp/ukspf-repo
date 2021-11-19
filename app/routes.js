const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)
// Add your routes here - above the module.exports line



// Branching Prototype Version 3
router.post('/version-3/you-are-eligible-to-apply-as-a-lead-applicant', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const q1 = req.session.data['q-1']
  const q2 = req.session.data['q-2']
  const q3 = req.session.data['q-3']
  const q4 = req.session.data['q-4']
  const q5 = req.session.data['q-5']

  if (q1 == 'true' &&
         q2 == 'true' &&
         q3 == 'true' &&
         q4 == 'true' &&
         q5 == 'true') {
       res.redirect('/version-3/you-are-eligible-to-apply-as-a-lead-applicant')
     } else {
       res.redirect('/version-3/you-are-not-eligible-to-apply-as-a-lead-applicant')
     }
   })



router.post('/what-type-of-organisation-are-you-branching', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names



      if(document.getElementById('reg-company').checked) {
        res.redirect('/version-3/companies-house-lookup')
      }
      else if(document.getElementById('reg-charity').checked) {
        res.redirect('/version-3/companies-house-lookup')
      }
      else if(document.getElementById('reg-no').checked) {
        res.redirect('/version-3/companies-house-lookup')
      }
      else {
        res.redirect('/version-3/companies-house-lookup')
      }
    })


// *****************************************************************************

// Branching Prototype Version 3b

// Eligibility 1
router.post('/version-3b/will-your-organisation-deliver-projects-in-the-UK', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const e1 = req.session.data['eligibility-1']

  if (e1 === 'false') {
    res.redirect('/version-3b/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else {
    res.redirect('/version-3b/will-your-organisation-deliver-projects-in-the-UK')
  }
})

// Eligibility 2
router.post('/version-3b/does-your-organisation-have-a-uk-bank-account-or-building-society-account', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const e2 = req.session.data['eligibility-2']

  if (e2 === 'false') {
    res.redirect('/version-3b/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else {
    res.redirect('/version-3b/does-your-organisation-have-a-uk-bank-account-or-building-society-account')
  }
})

// Eligibility 3
router.post('/version-3b/is-your-organisation-a-registered-company-charity-or-a-non-registered-public-body-such-as-a-local-authority', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const e3 = req.session.data['eligibility-3']

  if (e3 === 'false') {
    res.redirect('/version-3b/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else {
    res.redirect('/version-3b/is-your-organisation-a-registered-company-charity-or-a-non-registered-public-body-such-as-a-local-authority')
  }
})

// Eligibility 4
router.post('/version-3b/If-your-organisation-is-a-registered-company-or-charity-has-it-filed-a-full-set-of-accounts-within-the-last-12-months', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const e4 = req.session.data['eligibility-4']

  if (e4 === 'false') {
    res.redirect('/version-3b/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else {
    res.redirect('/version-3b/If-your-organisation-is-a-registered-company-or-charity-has-it-filed-a-full-set-of-accounts-within-the-last-12-months')
  }
})

// Eligibility 5
router.post('/version-3b/you-are-eligible-to-apply-as-a-lead-applicant', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const e5 = req.session.data['eligibility-5']

  if (e5 === 'true'){
    res.redirect('/version-3b/you-are-eligible-to-apply-as-a-lead-applicant')
  } else {
    res.redirect('/version-3b/you-are-not-eligible-to-apply-as-a-lead-applicant')
  }
})

// *****************************************************************************


// Branching
router.post('/examples/branching/over-18-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('/version-2/return-to-an-application')
  } else {
    res.redirect('/version-2/invitation-number')
  }
})

module.exports = router
