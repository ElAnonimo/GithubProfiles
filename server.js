var express = require('express');
var path = require('path');																				// comes with express actually
var bodyParser = require('body-parser');

var app = express();																							// initialize express

app.set('port', process.env.PORT || 3000);												// set port

app.use(express.static(path.join(__dirname, 'client')));					// set static path to the client side

app.use(bodyParser.json());																				// says to the app to use bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(app.get('port'), function() {													// start server
	console.log('Server has started on port ' + app.get('port'));
});