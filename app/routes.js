const express = require('express')
const router = express.Router()
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)
// Add your routes here - above the module.exports line







// Branching Prototype Version 1
router.post('branch', function (req, res) {
  // Eligibility-1 branching

  const startnew = req.session.data['start-new']

  if (startnew === 'false') {
    res.redirect('branch')
  } else {
    res.redirect('version-1/eligibility-2')
  }
})

router.post('/branch-eligibility-2', function (req, res) {
  // Eligibility-2 branching

  const bankcheck = req.session.data['bank-check']

  if (bankcheck === 'false') {
    res.redirect('version-1/eligibility-2-no')
  } else {
    res.redirect('version-1/eligibility-3')
  }
})

router.post('/branch-eligibility-3', function (req, res) {
  // Eligibility-3 branching

  const chcheck = req.session.data['ch-check']

  if (chcheck === 'false') {
    res.redirect('version-1/eligibility-3-no')
  } else {
    res.redirect('version-1/how-much-money-are-you-applying-for')
  }
})

// Branching Prototype Version 2

router.post('/v2-branching-eligibility-1', function (req, res) {
  // Eligibility-1 branching

  const regcheck = req.session.data['invitation-check']

  if (regcheck === 'false') {
    res.redirect('version-2/eligibility-1-no')
  } else {
    res.redirect('version-2/eligibility-2')
  }
})

router.post('/v2-branch-eligibility-2', function (req, res) {
  // Eligibility-2 branching

  const bankcheck = req.session.data['bank-check']

  if (bankcheck === 'false') {
    res.redirect('version-2/eligibility-2-no')
  } else {
    res.redirect('version-2/eligibility-3')
  }
})

router.post('/v2-branch-eligibility-3', function (req, res) {
  // Eligibility-3 branching

  const chcheck = req.session.data['ch-check']

  if (chcheck === 'false') {
    res.redirect('version-2/eligibility-3-no')
  } else {
    res.redirect('version-2/how-much-money-are-you-applying-for')
  }
})

module.exports = router
