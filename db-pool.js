var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_db'
});

function query(sql, callback) {
  pool.getConnection(function(err, connection) {
    if (err) {
      callback(err, NULL);
    }
    else {
      connection.query(sql, function(err, rows) {
        callback(err, rows);
        connection.release();
      });
    }
  });
}
exports.query = query;
