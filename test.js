//Require the 'express' library
//Basically have access to the imported library
var express = require('express');

//This creates an instance of the 'express' server
var app = express();

//Defines a route
//'req' = request
//'res' = response
app.get('/', function(req, res) {
	res.send('<h1>Hello!</h1>');
});

//Starts a server
app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});