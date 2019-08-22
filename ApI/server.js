//import library 
var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

//Configure Middleware
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//configure Database Connection
var url = "mongodb://127.0.0.1:27017";

app.get("/getProducts", function(request, response) {
  mongoClient.connect(url, function(err, db)  {
    if(!err) {
      db.db("angular7").collection("sampletable").find({}).toArray(function(err, documents)  {
        if(!err) {
          response.send(documents);
        } else {
          console.log(err);
        }
      });
    }else {
      console.log(err);
    }
  });
});

app.listen("8989");
console.log("server started.http://127.0.0.1:8989");