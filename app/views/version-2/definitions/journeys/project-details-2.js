module.exports = plan => {



  plan.addSequence(
    'project-details-2',
    'trunk:task-list',
  );
  plan.addOrigin('pd2', 'project-details-2');

};
