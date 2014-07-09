// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("Hello World!");
	response.end();
});
/*
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	socket.on('message_to_server', function(data) {
		io.sockets.emit("message_to_client", {message: data["message"] });
	});
});
*/
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
