var fs = require('fs');
var http = require('http');
var url = require('url');


http.createServer(function(req,res) {
    var path = url.parse(req.url).pathname;
    switch(path) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.write("Server working");
            res.end();
            break;
        case '/index.html':
            fs.readFile(  + path, function(error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data);
                    res.end();
                }
            });
            break;
        case '/style.css':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/css'
                    });
                    res.write(data);
                    res.end();
                }
            });
            break;
        case '/HtmlPage2.html':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.write(data);
                    res.end();
                }
            });
            break;
        default:
            res.writeHead(404);
            res.write("do not exist: 404");
            res.end();
            break;
    }
}).listen(3000);