// Main server script
// Code borrowed from Poet examples and Express defaults

var
  express = require('express'),
  http = require('http'),
  app = express(),
  poet = require('poet')(app);

poet.init().then(function () {
  // initialized
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) { res.render('index'); });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
