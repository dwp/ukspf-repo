module.exports = plan => {



  plan.addSequence(
    'invitation-number',
    'trunk:task-list',
  );
  plan.addOrigin('inv', 'invitation-number');

};
