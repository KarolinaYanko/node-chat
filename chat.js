var clients = [];

exports.subscribe = function(req, res){
	console.log("Subscribe");

	clients.push(res);

	res.on('close', function(){
		clients.splice(clients.indexOf(res), 1);
	});
}
exports.publish = function(message){
	console.log("Publish '%s'", message);

	clients.forEach(function(res){
		// console.log(res)
		res.end(message);
	});

	clients = [];
}