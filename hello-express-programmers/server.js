var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.get('/', function(req, res, next) {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/help', function(req, res, next) {
  res.send('Nope.. nothing to see here');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
