module.exports = plan => {



  plan.addSequence(
    'project-details-1',
    'trunk:task-list',
  );
  plan.addOrigin('pd1', 'project-details-1');

};
