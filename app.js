var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function(req, res){
  request("http://www.omdbapi.com/?s=california&apikey=thewdb", function(error, response, body){
    if(!error && response.statusCode == 200){
      var resultsParsed = JSON.parse(body);
      res.send(results["Search"][0]);
    }
  });
});

app.listen(3000, "localhost", function(){
  console.log("Movie App is running.")
});
