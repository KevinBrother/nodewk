var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, respone){
    console.log(request.method + ':' + request.url);

    var urlParse = url.parse(request.url);
    console.log('url:' + urlParse);

    // 解析当前目录
    var workDir = path.resolve('.');
    console.log('workDir:' + workDir);

    var root = path.resolve(process.argv[2] || '.');
    console.log('root:' + root);

    var filePath = path.join(root, urlParse.pathname);
    console.log('filePath', filePath);

    fs.stat(filePath, function(err, stat){
        if(!err && stat.isFile()){
            console.log('200' + request.url);
               
            respone.writeHead(200);
            fs.createReadStream(filePath).pipe(respone);
        }else {
            console.log('404 ' + request.url);

            respone.writeHead(404);
            respone.end("Not Found");
        }
    })
 
    //respone.end('<h1>Hello world</h1>');
});

server.listen(8090);
console.log('Server is running at http://127.0.0.1:8090/')