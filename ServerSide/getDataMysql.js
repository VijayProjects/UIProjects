//import module
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'uiproject'
});

connection.connect();
connection.query("select * from employee", function(err, rows, fields) {
  if(!err) {
    console.log(rows);
  } else {
    console.log(err);
  }
});
