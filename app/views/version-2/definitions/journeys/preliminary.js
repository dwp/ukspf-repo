module.exports = plan => {
  // plan.addSequence(
  //   'declaration',
  //   'shahed',
  //   'contact-details',
  //   'dob',
  //   'preliminary:initial-review',
  //   'trunk:task-list',
  // );

  plan.addSequence(
    'declaration',
    'trunk:task-list',
  );

  plan.addOrigin('preliminary', 'declaration');

};
