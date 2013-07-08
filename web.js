var express = require('express');
var fs = require('fs');

var fileName = "index.html"

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

 fs.readFile(fileName, function(error, buffer) {
   if (!error) {
     var data = buffer.toString("utf8", 0, buffer.length);
     console.log(data);
     response.send(data);
   }
   else {
     console.error("No File Found");
     response.send("No File Found");
     }
     }); 
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});
