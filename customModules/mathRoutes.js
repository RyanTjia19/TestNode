// Uses the 'express' module and get
// the instance of the Router() object
const express = require('express');
const router = express.Router();

//Looks like the period is to say "current directory"
const math = require('./mathModule.js');

//Register some routes to the router object
router.get('/', function (req, res) {
	//res.sendFile(__dirname + '/html/mathForm.html');
	res.render('mathForm');
});

router.get('/moduleTest', function (req, res) {
	res.send('This is from the external file');
});

//These will get data from user's input
router.post('/areaCircle', (req, res) => {
	const model = {
		problem : "An area",
		shape : "circle",
		dimensions : {
			radius : req.body.radius
		},
		result : math.circleArea(req.body.radius)
	}

	res.render('mathResult', model);
});

router.post('/perimeterCircle', (req, res) => {
	const model = {
		problem : "The perimeter",
		shape : "circle",
		dimensions : {
			radius : req.body.radius
		},
		result : math.circlePerimeter(req.body.radius)
	}

	res.render('mathResult', model);
});

router.post('/volumeBox', (req, res) => {
	const model = {
		problem : "The volume",
		shape: "box",
		dimensions : {
			length : req.body.length,
			width : req.body.width,
			height : req.body.height
		},
		result : math.boxVolume(req.body.length, req.body.width, req.body.height)
	}

	res.render('mathResult', model);
});

// Exports the router object
module.exports = router;