var express = require("express");
var app = express();

app.get("/todos", function(req, res){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(["test1", "test2", "test3"]));
});

var server = app.listen(3000, function(){
	console.log("server listening at : " + server.address().address + ":" + server.address().port)
});
