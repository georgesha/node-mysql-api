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

var pool = require("./db-pool.js");

router.get('/todo', function(req, res) {
  var query = "SELECT * FROM todo_table";
  pool.query(query, function(err, rows) {
    if (err) {
      res.end("Error!");
    }
    else {
      res.send(rows);
    }
  });
});

router.get('/todo/:id', function(req, res) {
  var id = req.params.id;
  var query = "SELECT * FROM todo_table WHERE id='" + id + "'";
  pool.query(query, function(err, rows) {
    if (err) {
      res.end("Error!");
    }
    else {
      res.send(rows);
    }
  });
});

router.post('/todo', function(req, res) {
  var id = req.body.id;
  var content = req.body.content;
  var query = "INSERT INTO todo_table (id, content) VALUES ('" + id + "', '" + content + "')";
  pool.query(query, function(err, rows) {
    if (err) {
      res.end("Error!");
    }
    else {
      res.send("New todo added");
    }
  });
});

app.use('/api', router);
app.listen(port);
