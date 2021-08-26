module.exports = plan => {



  plan.addSequence(
    'regulatory-body',
    'trunk:task-list',
  );
  plan.addOrigin('rb', 'regulatory-body');

};
