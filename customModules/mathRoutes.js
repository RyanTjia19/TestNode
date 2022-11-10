// Uses the 'express' module and get
// the instance of the Router() object
const express = require('express');
const router = express.Router();

//Looks like the period is to say "current directory"
const math = require('./mathModule.js');

//Register some routes to the router object
router.get('/', function (req, res) {
	res.sendFile(__dirname + '/html/form.html');
});

router.get('/moduleTest', function (req, res) {
	res.send('This is from the external file');
});

//These will get data from user's input
router.post('/areaCircle', (req, res) => {
	var radius = req.body.radius;
	var area = math.circleArea(radius);
	res.send(`<h1>An area of a circle</h1><p>Given a circle with a radius of ${radius}, it will have an area of</p><p>${area}</p><a href="/external">Back</a>`);
});

router.post('/perimeterCircle', (req, res) => {
	var radius = req.body.radius;
	var perimeter = math.circlePerimeter(radius);
	res.send(`<h1>The perimeter of a circle</h1><p>Given a circle with a radius of ${radius}, it will have a perimeter of</p><p>${perimeter}</p><a href="/external">Back</a>`);
});

router.post('/volumeBox', (req, res) => {
	var length = req.body.length;
	var width = req.body.width;
	var height = req.body.height;
	var volume = math.boxVolume(length, width, height);

	res.send(`<h1>The volume of a rectangular prism</h1><p>Given a rectangular prism with a length of ${length}, width of ${width}, and height of ${height}, it will have a volume of</p><p>${volume}</p><a href="/external">Back</a>`);
});

// Exports the router object
module.exports = router;