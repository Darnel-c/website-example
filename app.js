const http = require('http');
const os = require('os');

console.log("Server starting...");

var handler = function(request, response) {
	console.log("Request from " + request.connection.remoteAddress);
	response.writeHead(200);
	response.end("This is a test web\n");
};

var www = http.createServer(handler);
www.listen(8080);
