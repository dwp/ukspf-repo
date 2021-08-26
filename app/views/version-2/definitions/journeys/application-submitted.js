module.exports = plan => {



  plan.addSequence(
    'application-submitted',
    'trunk:task-list',
  );
  plan.addOrigin('as', 'application-submitted');

};
