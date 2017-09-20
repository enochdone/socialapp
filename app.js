var http = require('http');

var myServer = http.createServer(function(req,res){
res.writeHead(200, {"Content-Type": "text/html"});
res.write('<h6>Development is in Progress...</h6>');
res.write('<body bgcolor="#87CEFA"><h1><center>Welcome to nakkapraveen.com</center></h1></body>');
res.end();
});

myServer.listen(80);
console.log('Go to http://localhost:80 on your browser');

