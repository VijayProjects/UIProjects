//import module
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
//get service from express
var server = express();

//parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({extended: true}));

//parse application/json
server.use(bodyParser.json());

//mysql database connection
var connection = mysql.createConnection({
  database: 'uiproject',
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root'
});
//create connection to mysql
connection.connect();

//get employees
server.get("/getEmployees", (request, response) => {
  connection.query("select * from employee",(err, rows, fields) => {
    if (!err) {
      response.send(rows);
    } else {
      console.log(err);
    }
  });
});
// add employee
server.post("/addEmployee", (request, response) => {
  var emp = {
    empname : request.body.name,
    desg : request.body.job,
    salary : request.body.sal
  }
  connection.query("insert into employee SET?", emp, (err, result) => {
    (!err)? response.send(result) : response.send(err); 
  }); 
});
//server listen port
server.listen(9090);
console.log("server is started:http://127.0.0.1:9090");
