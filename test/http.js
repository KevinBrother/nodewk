var http = require('http');

var server = http.createServer(function(request, respone){
    console.log(request.method + ':' + request.url);
    
    respone.end('<h1>Hello world</h1>')

});

server.listen(8090);
console.log('Server is running at http://127.0.0.1:8090/')