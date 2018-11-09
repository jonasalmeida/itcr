
var http=require('http')
var port = process.env.PORT || 8080
console.log('index.js loaded, port = '+port)

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   //if(request.url!="/favicon.ico"){
       response.end('Hello World at '+Date());
   //}else{
   //    response.end()
   //}
   
}).listen(port);

// Console will print the message
console.log('listening to port '+port);