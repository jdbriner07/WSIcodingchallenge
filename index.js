var express = require('express');
var app = express();

var request = require('ajax-request');

var server = require('http').Server(app);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
})

app.get('/data.js', function(req, res) {
    res.sendfile(__dirname + '/client/data.js')
})

app.get('/test/:fileName', function(req, res) {
	res.sendFile(__dirname + `/test/${req.params.fileName}`);	
})

app.get('/:fileType/:fileName', function(req, res) {
	res.sendFile(__dirname + `/client/${req.params.fileType}/${req.params.fileName}`);
})



app.get('/*', function(req, res) {
	res.sendStatus(404);
})

app.post('/*', function(req, res) {
	res.sendStatus(404);
})

server.listen(process.env.port || 3000, function() {
	console.log(`listening on port ${process.env.port || 3000}`);
});


module.exports.app = app;