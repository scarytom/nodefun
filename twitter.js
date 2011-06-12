(function() {
	"user strict";
	var http = require("http"),
	    options = {
	        host: 'search.twitter.com',
	        port: 80,
	        path: '/search.json?q=spa2011'
	    };
	
	module.exports.get = function(handler) {
		http.get(options, function(res) {
		    console.log("Got response: " + res.statusCode);
	        res.on('data', function(d) {
	            handler(d);
	        });
	    }).on('error', function(e) {
	        console.log("Got error: " + e.message);
	    });
	};
})();