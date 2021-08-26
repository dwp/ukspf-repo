module.exports = plan => {

  plan.addSequence(
    'dob',
    'trunk:task-list',
  );

  plan.addOrigin('d', 'dob');

};
