var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var PORT = process.env.PORT || 9090;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


var Address = require('./utils/address2.js');

app.get('/address/:name/:zip', (req, res) => {
	var name = req.params.name;
	var zip = req.params.zip;
	Address(name, zip, (result) => {
		res.json(result);
	})
})


app.listen(PORT, function() {
	console.log("Server listening on PORT: " + PORT);
});