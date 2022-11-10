//A local function/variable in this file will not be accessible to other files
var circleArea = function(radius) {
	return Math.pow(radius, 2) * Math.PI;
}

//Export as a json object
module.exports = {
	circlePerimeter: (radius) => {
		return 2 * radius * Math.PI;
	},

	circleArea : (radius) => {
		return Math.pow(radius, 2) * Math.PI;
	},

	boxVolume : (length, width, height) => {
		return length * width * height;
	}
}