module.exports = plan => {



  plan.addSequence(
    'bank-details',
    'trunk:task-list',
  );
  plan.addOrigin('bd', 'bank-details');

};
