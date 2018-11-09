console.log('index.js loaded')
var http=require('http')
var port = process.env.PORT || 8080


http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(port);

// Console will print the message
console.log('listening to port '+port);