module.exports = plan => {
  plan.addSequence(
    'task-list',
    'finish',
  );

  plan.setRoute('task-list', 'finish', (route, context, validationContext) => {
    // Here we are preventing from users going past this point until we've
    // recieved an answer to the "horror-books.like" question, which is in
    // the `books` journey.
    return context.data.hasOwnProperty('check-your-answers')
      && context.data['check-your-answers'].like
      && !(context.validation.hasOwnProperty('check-your-answers') && context.validation['check-your-answers'].length);
  });

  plan.addOrigin('trunk', 'task-list');
};
