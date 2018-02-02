var pool = require("../db-pool.js");

var TodoCollection = {
  getAll: function(req, res) {
    var query = "SELECT * FROM todo_table";
    pool.query(query, function(err, rows) {
      if (err) {
        res.end("Error!");
      }
      else {
        res.send(rows);
      }
    });
  },

  getOne: function(req, res) {
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
  },

  createOne: function(req, res) {
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
  },

  deleteOne: function(req, res) {
    var id = req.params.id;
    var query = "DELETE FROM todo_table WHERE id='" + id + "'";
    pool.query(query, function(err, rows) {
      if (err) {
        res.end("Error!");
      }
      else {
        res.send("Todo deleted");
      }
    });
  }
};

module.exports = TodoCollection;
