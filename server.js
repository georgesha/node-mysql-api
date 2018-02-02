var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true
}));
app.use(bodyParser.json({
  limit: '100mb'
}));

var port = process.env.PORT || 5000;

var router = require('./routers');

app.use('/api', router);
app.listen(port);
