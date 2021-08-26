module.exports = plan => {



  plan.addSequence(
    'project-details-3',
    'trunk:task-list',
  );
  plan.addOrigin('pd3', 'project-details-3');

};
