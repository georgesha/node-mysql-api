var express = require('express');
var app = express();
var router =  express.Router();

var port = process.env.PORT || 5000;

var pool = require("./db-pool.js");

router.get('/todo', function(req, res) {
  pool.query('SELECT * FROM todo_table', function(err, rows) {
    res.send(rows);
  });
});

app.use('/api',router);
app.listen(port);
