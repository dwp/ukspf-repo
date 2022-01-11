module.exports = function (app) {

  // Code supplied by Gary for dealing with query strings
  app.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // var path = require('path')
  // Code for the eligibility screen logic

  app.get('/release-1/can-your-organisation-meet-all-of-the-needs-listed-in-the-competition', (req, res, next) => {
    res.render('release-1/can-your-organisation-meet-all-of-the-needs-listed-in-the-competition');
  });

  app.get('/release-1/will-your-organisation-deliver-projects-in-the-uk', (req, res, next) => {
//    console.log(req);
    res.render('release-1/will-your-organisation-deliver-projects-in-the-uk');
  });

  app.get('/release-1/eligibility-result', function(req, res) {

    let question1 = req.session.data['eligibility-1']
    let question2 = req.session.data['eligibility-2']
    let question3 = req.session.data['eligibility-3']
    let question4 = req.session.data['eligibility-4']
    let question5 = req.session.data['eligibility-5']

  if (question1 === 'no'){
      res.redirect('you-are-not-eligible-to-apply-as-a-lead-applicant');
    } else if (question2 === 'no'){
      res.redirect('you-are-not-eligible-to-apply-as-a-lead-applicant');
    } else if (question3 === 'no'){
      res.redirect('you-are-not-eligible-to-apply-as-a-lead-applicant');
    } else if (question4 === 'no'){
      res.redirect('you-are-not-eligible-to-apply-as-a-lead-applicant');
    } else if (question5 === 'no'){
      res.redirect('you-are-not-eligible-to-apply-as-a-lead-applicant');
    } else {
      res.redirect('you-are-eligible-to-apply-as-a-lead-applicant')
    }
  });

  app.get('/release-1/branch', (req, res, next) => {
    res.render('version-4/you-are-not-eligible-to-apply-as-a-lead-applicant');
  });


  // END OF VERSION 1 ROUTES

}
