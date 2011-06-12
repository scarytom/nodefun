"user strict";

var http = require("http"),
    server,
    accumulator = 0;

server = http.createServer(function(request, response) {
	var value, operation, path;
	response.writeHeader(200, {
		"content-type": "text/plain"
	});
	
	path = request.url.split("/");
	operation = path[1];
	if (operation === "reset") {
		accumulator = 0;
	}
	
	value = parseInt(path[path.length - 1], 10);
	
	if (value || value === 0) {
		if (operation === "multiply") {
			accumulator *= value;
		}
		else if (operation === "divide") {
			accumulator /= value;
		}
		else if (operation === "subtract") {
			accumulator -= value;
		}
		else {
			accumulator += value;
		}
	}
	response.write("" + accumulator);
	response.end();
});

server.listen("8888");