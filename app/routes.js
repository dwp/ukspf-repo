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

  if (q1 === 'false') {
    res.redirect('/version-3/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else if (q2 === 'false'){
      res.redirect('/version-3/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else if (q3 === 'false'){
    res.redirect('/version-3/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else if (q4 === 'false'){
    res.redirect('/version-3/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else if (q5 === 'false'){
    res.redirect('/version-3/you-are-not-eligible-to-apply-as-a-lead-applicant')
  } else {
    res.redirect('/version-3/you-are-eligible-to-apply-as-a-lead-applicant')
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
