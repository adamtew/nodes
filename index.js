var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = 3000;
var indexRoute = require('./routes/index-routes');

app.engine('handlebars', exphbs({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.get('/', indexRoute)

app.listen(port, function(error) {
  if (error) {
    console.log('error');
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
