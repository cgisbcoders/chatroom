// Load the http module to create an http server.
var http = require('http'),
	fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  fs.readFile("index.html", "utf-8", function(err, data) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(data);
	response.end();
  });
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	socket.on('message_to_server', function(data) {
		io.sockets.emit("message_to_client", {message: data["message"] });
	});
});

var ipaddress = process.env.OPENSHIFT_NODEJS_IP|| "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

console.log(ipaddress);
server.listen( port, ipaddress);
