module.exports = plan => {



  plan.addSequence(
    'organisation-details',
    'trunk:task-list',
  );
  plan.addOrigin('j', 'organisation-details');

};
