// Main server script
// Code borrowed from Poet examples and Express defaults

var
  _ = require('./lib/lodash.min.js'),
  express = require('express'),
  http = require('http'),
  Comments = require('Comments'),
  app = express(),
  poet = require('poet')(app);

var comments = new Comments({
  // host: 'mongodb://nodejitsu_winstonwan:uuha4khqumqelutt7lhrua5odm@ds045978.mongolab.com:45978/nodejitsu_winstonwan_nodejitsudb3067388455',
  host: 'ds045978.mongolab.com',
  username: 'nodejitsu_winstonwan',
  password: 'uuha4khqumqelutt7lhrua5odm',
  port: 45978,
  name: 'nodejitsu_winstonwan_nodejitsudb3067388455',
  comments: 'comments'
});

// Poet + Comments
poet.init().then(function () {});

// add routes for comments
require("./routes/comments")(poet, app, comments);
require("./routes/post_comments")(poet, app, comments, _);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.logger('dev'));
app.use(express.favicon());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) { res.render('index'); });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
