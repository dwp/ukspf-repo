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

    // sectioncount
    if (!req.session.sectionCount){
      req.session.sectionCount = 0;
    }

    // organisations
    if (!req.session.orgcount){
      req.session.orgcount = 0;
    }

    // organisations
    if (!req.session.organisationscount){
      req.session.organisationscount = 0;
    }

    // contributors
    if (!req.session.contributorscount){
      req.session.contributorscount = 0;
    }

    // nameandteam
    if (!req.session.nameandteamcount){
      req.session.nameandteamcount = 0;
    }

    // description
    if (!req.session.descriptioncount){
      req.session.descriptioncount = 0;
    }

    // timeline
    if (!req.session.timelinecount){
      req.session.timelinecount = 0;
    }

    // milestones and outcomes are not included here as timeline is the only list ID related to the timeline section status

    // projectmanagement
    if (!req.session.projectmanagementcount){
      req.session.projectmanagementcount = 0;
    }

    // compliance
    if (!req.session.compliancecount){
      req.session.compliancecount = 0;
    }

    // annualincome
    if (!req.session.annualincomecount){
      req.session.annualincomecount = 0;
    }

    // costbreakdown
    if (!req.session.costbreakdowncount){
      req.session.costbreakdowncount = 0;
    }

    // financemanagement
    if (!req.session.financemanagementcount){
      req.session.financemanagementcount = 0;
    }

    // evidence
    if (!req.session.evidencecount){
      req.session.evidencecount = 0;
    }

    // falseinformation
    if (!req.session.falseinformationcount){
      req.session.falseinformationcount = 0;
    }

    // gdpr
    if (!req.session.gdprcount){
      req.session.gdprcount = 0;
    }

    // approval
    if (!req.session.approvalcount){
      req.session.approvalcount = 0;
    }


    // organisations
    if (req.session.sectionStatus.organisations == 'completed') {
      if (req.session.orgcount == 0) {
        console.log('help');
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.orgcount = 1;
      }
    };

    // contributors
    if (req.session.sectionStatus.contributors == 'completed') {
      if (req.session.contributorscount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.contributorscount = 1;
      }
    };

    // nameandteam
    if (req.session.sectionStatus.nameandteam == 'completed') {
      if (req.session.nameandteamcount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.nameandteamcount = 1;
      }
    };

    // description
    if (req.session.sectionStatus.description == 'completed') {
      if (req.session.descriptioncount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.descriptioncount = 1;
      }
    };

    // timeline
    if (req.session.sectionStatus.timeline == 'completed') {
      if (req.session.timelinecount == 0) {
        console.log('timeline');
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.timelinecount = 1;
        console.log(req.session.timelinecount);
      }
    };

    // projectmanagement
    if (req.session.sectionStatus.projectmanagement == 'completed') {
      if (req.session.projectmanagementcount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.projectmanagementcount = 1;
      }
    };

    // compliance
    if (req.session.sectionStatus.compliance == 'completed') {
      if (req.session.compliancecount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.compliancecount = 1;
      }
    };

    // annualincome
    if (req.session.sectionStatus.annualincome == 'completed') {
      if (req.session.annualincomecount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.annualincomecount = 1;
      }
    };

    // costbreakdown
    if (req.session.sectionStatus.costbreakdown == 'completed') {
      if (req.session.costbreakdowncount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.costbreakdowncount = 1;
      }
    };

    // financemanagement
    if (req.session.sectionStatus.financemanagement == 'completed') {
      if (req.session.financemanagementcount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.financemanagementcount = 1;
      }
    };

    // evidence
    if (req.session.sectionStatus.evidence == 'completed') {
      if (req.session.evidencecount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.evidencecount = 1;
      }
    };

    // falseinformation
    if (req.session.sectionStatus.falseinformation == 'completed') {
      if (req.session.falseinformationcount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.falseinformationcount = 1;
      }
    };

    // gdpr
    if (req.session.sectionStatus.gdpr == 'completed') {
      if (req.session.gdprcount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.gdprcount = 1;
      }
    };

    // approval
    if (req.session.sectionStatus.approval == 'completed') {
      if (req.session.approvalcount == 0) {
        req.session.sectionCount = (req.session.sectionCount + 1);
        req.session.approvalcount = 1;
      }
    };


      res.render('p5/list.html', {sectionStatus: req.session.sectionStatus, sectionCount: req.session.sectionCount});
    });

    // Clear data on the 'application cancelled' screen

  app.get('/prototype-admin/clear-data', function (req, res) {
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
