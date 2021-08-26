module.exports = plan => {



  plan.addSequence(
    'contact-details',
    'trunk:task-list',
  );
  // plan.addOrigin('preliminary/planshahed/plan1', 'contact-details');
  // plan.addOrigin('planshahed/plan1', 'contact-details');

  plan.addOrigin('p', 'contact-details');

};
