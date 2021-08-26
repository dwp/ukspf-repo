module.exports = plan => {



  plan.addSequence(
    'check-your-answers',
    'application-submitted',
    'trunk:task-list',
  );
  plan.addOrigin('cya', 'check-your-answers');

};
