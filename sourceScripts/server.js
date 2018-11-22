var express = require('express')
var app = express();
var path = require('path')

app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../src/index.html"))
})



app.listen(8080, function(err){
	if(err){
		console.log(err)
	}
	console.log("server is running on port 8080")
})
