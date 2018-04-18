var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req, res){
  reuqees.send("It works.");
});

app.listen(3000, "localhost", function(){
  console.log("Movie App is running.")
});
