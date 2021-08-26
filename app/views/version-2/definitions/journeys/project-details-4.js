module.exports = plan => {



  plan.addSequence(
    'project-details-4',
    'trunk:task-list',
  );
  plan.addOrigin('pd4', 'project-details-4');

};
