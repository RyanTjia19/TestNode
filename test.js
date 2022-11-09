//Require the 'express' library
//Basically have access to the imported library
const express = require('express');

//This creates an instance of the 'express' server
const app = express();

//Node treats every file as a module, but they must be in the "node_modules" folder
var math = require('customModules/mathModule.js');
var externalRoutes = require('customModules/routes.js');

//Defines a route, 'req' or first parameter is request, 'res' or second parameter is response
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

//app.post() is used for when the user submit data via form
//app.get() is used when the user clicks on a link
app.post('/areaCircle', (req, res) => {
	res.send('<h1>This works</h1>');
	//var radius = Number(req.body.input);
	//var area = math.circle_Area(radius);
	//res.send(`<h1>An area of a circle</h1><p>Given a circle with a radius of ${radius}, it will have an area of</p><p>${area}</p>`);
})

app.get('/volumeBox/:length/:width/:height', (req, res) => {
	var length = req.params['length'];
	var width = req.params['width'];
	var height = req.params['height'];

	var volume = math.boxVolume(length, width, height);

	res.send(`<h1>The volume of a rectangular prism</h1><p>Given a rectangular prism with a length of ${length}, width of ${width}, and height of ${height}, it will have a volume of</p><p>${volume}</p>`);
})

//Using the routes from the external file
app.use('/external', externalRoutes);

//Starts a server -- Do 'node test.js' to run
//First parameter is the port number
app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});