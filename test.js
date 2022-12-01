//Require the 'express' library
//Basically have access to the imported library
const express = require('express');

//This creates an instance of the 'express' server
const app = express();

//Middleware to access the data from forms
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Node treats every file as a module
var mathRoutes = require('./customModules/mathRoutes.js');

//Uses the 'pug' library to use html templates, must set 'views' and 'view engine'
//Must download 'pug' library first
//npm install pug
app.set('views', './customModules/html');
app.set('view engine', 'pug');

//Defines a route, 'req' or first parameter is request, 'res' or second parameter is response
//Url is "localhost:3000"
app.get('/', function(req, res) {
	res.send('<h1>Hello!</h1><p>The response given must be on the same line</p>');
});

//Url is "localhost:3000/sample1"
app.get('/sample1', function(req, res) {
	res.send('<h1>This is the second route</h1>')
});

//Url is "localhost:3000/json"
app.get('/json', function(req, res) {
	let data = {
		fname: "Bob",
		lname: "Son"
	};

	res.json(data);
});

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
	};
});

//Using the routes from the external file
app.use('/external', mathRoutes);

//Using the css from the external file
app.use('/css', express.static('./customModules/css'));

//Using static resources from the subfolder 'images'
app.use('/pic', express.static('./customModules/images'));

//Starts a server -- Do 'node test.js' to run
//First parameter is the port number
app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});