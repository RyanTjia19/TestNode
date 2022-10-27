//Require the 'express' library
//Basically have access to the imported library
var express = require('express');

//This creates an instance of the 'express' server
var app = express();

//Defines a route, 'req' = request, 'res' = response

//Url is "localhost:3000"
app.get('/', function(req, res) {
	res.send('<h1>Hello!</h1><p>The response given must be on the same line</p>');
});

//Url is "localhost:3000/sample1"
app.get('/sample1', function(req, res) {
	res.send('<h1>This is the second route</h1>')
})

//Url is "localhost:3000/json"
app.get('/json', function(req, res) {
	let data = {
		fname: "Bob",
		lname: "Son"
	}

	res.json(data);
})

//Url is "localhost:3000/info/data"
//Where 'data' is the parameter to determine different
//The ':' makes whatever string comes after it, become a parameter
app.get('/info/:data', function(req, res) {

	//The parameter will be stored as a json format
	//In this case, we will get [data: parameter]
	var logic = req.params['data'];

	if (logic == '1') {
		res.send(`<h1>Since the parameter is "${logic}", then you get this page</h1>`);
	}

	else {
		res.send('<h1>If the parameter is not "1", then you shall get this page</h1>');
	}
})

//Starts a server
app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});