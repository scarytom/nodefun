"user strict";

var http = require("http"),
    server;

server = http.createServer(function(request, response) {
	response.writeHeader(200, {
		"content-type": "text/plain"
	});
	response.write("Hello, world");
	response.end();
});

server.listen("8888");