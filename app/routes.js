module.exports = {

  bind: function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // Includes

    // Prototypes and exploration
    require('./routes/p5.js')(app);
    // Reference screens
    require('./routes/eligibility.js')(app);
  }
}
