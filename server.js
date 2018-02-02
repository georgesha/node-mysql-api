var mysql = require('mysql');
''
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_db'
});

connection.connect();

let query = 'CREATE TABLE todo_table ( id VARCHAR(20) NOT NULL, content VARCHAR(50), PRIMARY KEY (id))';
connection.query(query, function(err, rows, fields) {
  if (err) throw err;
});

connection.end();
