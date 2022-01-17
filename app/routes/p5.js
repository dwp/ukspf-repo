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

  // Code for the list screen

  app.get('/p5/list', (req, res, next) => {

    if (!req.session.sectionStatus){
      // console.log('no session');
      req.session.sectionStatus = {
        // cwyn: 'complete',

// ukspf variables
        nameandteam: undefined,
        description: undefined,
        timeline: undefined,
        projectmanagement: undefined,
        compliance: undefined,
        annualincome: undefined,
        costbreakdown: undefined,
        financemanagement: undefined,
        evidence: undefined,
        falseinformation: undefined,
        gdpr: undefined,
        approval: undefined,
        organisations: undefined,
        contributors: undefined,
      }
    }

    if (!req.session.sectionCount){
      req.session.sectionCount = 0;
    }


    // organisations
    if (req.query.organisations == 'completed') {
      if (req.session.sectionStatus.organisations != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.organisations = req.query.organisations
    };
    if (req.query.organisations == 'inprogress') {
      req.session.sectionStatus.organisations = req.query.organisations
    };

    // contributors
    if (req.query.contributors == 'completed') {
      if (req.session.sectionStatus.contributors != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.contributors = req.query.contributors
    };
    if (req.query.contributors == 'inprogress') {
      req.session.sectionStatus.contributors = req.query.contributors
    };

    // nameandteam
    if (req.query.nameandteam == 'completed') {
      if (req.session.sectionStatus.nameandteam != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.nameandteam = req.query.nameandteam
    };
    if (req.query.nameandteam == 'inprogress') {
      req.session.sectionStatus.nameandteam = req.query.nameandteam
    };

    // description
    if (req.query.description == 'completed') {
      if (req.session.sectionStatus.description != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.description = req.query.description
    };
    if (req.query.description == 'inprogress') {
      req.session.sectionStatus.description = req.query.description
    };

    // timeline
    if (req.query.timeline == 'completed') {
      if (req.session.sectionStatus.timeline != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.timeline = req.query.timeline
    };
    if (req.query.timeline == 'inprogress') {
      req.session.sectionStatus.timeline = req.query.timeline
    };

    // milestones
    if (req.query.milestones == 'completed') {
      if (req.session.sectionStatus.timeline != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.timeline = req.query.timeline
    };
    if (req.query.timeline == 'inprogress') {
      req.session.sectionStatus.timeline = req.query.timeline
    };

    // outcomes
    if (req.query.outcomes == 'completed') {
      if (req.session.sectionStatus.timeline != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.timeline = req.query.timeline
    };
    if (req.query.timeline == 'inprogress') {
      req.session.sectionStatus.timeline = req.query.timeline
    };

    // projectmanagement
    if (req.query.projectmanagement == 'completed') {
      if (req.session.sectionStatus.projectmanagement != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.projectmanagement = req.query.projectmanagement
    };
    if (req.query.projectmanagement == 'inprogress') {
      req.session.sectionStatus.projectmanagement = req.query.projectmanagement
    };

    // compliance
    if (req.query.compliance == 'completed') {
      if (req.session.sectionStatus.compliance != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.compliance = req.query.compliance
    };
    if (req.query.compliance == 'inprogress') {
      req.session.sectionStatus.compliance = req.query.compliance
    };

    // annualincome
    if (req.query.annualincome == 'completed') {
      if (req.session.sectionStatus.annualincome != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.annualincome = req.query.annualincome
    };
    if (req.query.annualincome == 'inprogress') {
      req.session.sectionStatus.annualincome = req.query.annualincome
    };

    // costbreakdown
    if (req.query.costbreakdown == 'completed') {
      if (req.session.sectionStatus.costbreakdown != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.costbreakdown = req.query.costbreakdown
    };
    if (req.query.costbreakdown == 'inprogress') {
      req.session.sectionStatus.costbreakdown = req.query.costbreakdown
    };

    // financemanagement
    if (req.query.financemanagement == 'completed') {
      if (req.session.sectionStatus.financemanagement != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.financemanagement = req.query.financemanagement
    };
    if (req.query.financemanagement == 'inprogress') {
      req.session.sectionStatus.financemanagement = req.query.financemanagement
    };

    // evidence
    if (req.query.evidence == 'completed') {
      if (req.session.sectionStatus.evidence != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.evidence = req.query.evidence
    };
    if (req.query.evidence == 'inprogress') {
      req.session.sectionStatus.evidence = req.query.evidence
    };

    // falseinformation
    if (req.query.falseinformation == 'completed') {
      if (req.session.sectionStatus.falseinformation != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.falseinformation = req.query.falseinformation
    };
    if (req.query.falseinformation == 'inprogress') {
      req.session.sectionStatus.falseinformation = req.query.falseinformation
    };

    // gdpr
    if (req.query.gdpr == 'completed') {
      if (req.session.sectionStatus.gdpr != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.gdpr = req.query.gdpr
    };
    if (req.query.gdpr == 'inprogress') {
      req.session.sectionStatus.gdpr = req.query.gdpr
    };

    // approval
    if (req.query.approval == 'completed') {
      if (req.session.sectionStatus.approval != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.approval = req.query.approval
    };
    if (req.query.approval == 'inprogress') {
      req.session.sectionStatus.approval = req.query.approval
    };

    res.render('p5/list.html', {sectionStatus: req.session.sectionStatus, sectionCount: req.session.sectionCount});
  });

  // Clear data on the 'application cancelled' screen

  app.get('/*/clear-p5', function (req, res) {
    req.session.destroy()
    res.render('p5/application-cancelled')
  })

  // Routes

  // Organisations
  app.get('/application-team/organisations/index-answer', function(req, res) {
        req.session.sectionStatus.organisations = 'completed';
        res.redirect('/application-team/contributors')
  });

  // Contributors
  app.get('/application-team/contributors/index-answer', function(req, res) {
    req.session.sectionStatus.contributors = 'completed';
    res.redirect('/project-details/name-and-team')
  });


  // Name and team
  app.get('/project-details/name-and-team/index-answer', function(req, res) {
    req.session.sectionStatus.nameandteam = 'completed';
    res.redirect('/project-details/description')
  });

  // Description
  app.get('/project-details/description/index-answer', function(req, res) {
    req.session.sectionStatus.description = 'completed';
    res.redirect('/project-details/timeline')
  });

  // Timeline
  app.get('/project-details/timeline/index-answer', function(req, res) {
    res.redirect('/project-details/timeline/milestones')
  });

  // Milestones
  app.get('/project-details/timeline/milestones/index-answer', function(req, res) {
    res.redirect('/project-details/timeline/outcomes')
  });

  // Outcomes
  app.get('/project-details/timeline/outcomes/index-answer', function(req, res) {
    req.session.sectionStatus.timeline = 'completed';
    res.redirect('/project-details/management')
  });

  // Project management
  app.get('/project-details/management/index-answer', function(req, res) {
    res.redirect('/project-details/management/project-management-page-2')
  });

  // Project management
  app.get('/project-details/management/project-management-page-2/index-answer', function(req, res) {
    req.session.sectionStatus.projectmanagement = 'completed';
    res.redirect('/project-details/compliance')
  });

  // Compliance
  app.get('/project-details/compliance/index-answer', function(req, res) {
    req.session.sectionStatus.compliance = 'completed';
    res.redirect('/finance-details/annual-income')
  });

  // Annual income
  app.get('/finance-details/annual-income/index-answer', function(req, res) {
    req.session.sectionStatus.annualincome = 'completed';
    res.redirect('/finance-details/cost-breakdown')
  });

  // Cost breakdown
  app.get('/finance-details/cost-breakdown/index-answer', function(req, res) {
    req.session.sectionStatus.costbreakdown = 'completed';
    res.redirect('/finance-details/management')
  });

  // Finance Management
  app.get('/finance-details/management/index-answer', function(req, res) {
    req.session.sectionStatus.financemanagement = 'completed';
    res.redirect('/declarations/evidence')
  });

  // Evidence
  app.get('/declarations/evidence/index-answer', function(req, res) {
    req.session.sectionStatus.evidence = 'completed';
    res.redirect('/declarations/false-information')
  });

  // False information
  app.get('/declarations/false-information/index-answer', function(req, res) {
    req.session.sectionStatus.falseinformation = 'completed';
    res.redirect('/declarations/gdpr')
  });

  // gdpr
  app.get('/declarations/gdpr/index-answer', function(req, res) {
    req.session.sectionStatus.gdpr = 'completed';
    res.redirect('/version-4/check-your-answers-before-submitting-your-application')
  });

  // Approval
  app.get('/approval/index-answer', function(req, res) {
    req.session.sectionStatus.approval = 'completed';
    res.redirect('/approval/check')
  });


  // END OF VERSION 1 ROUTES

}
