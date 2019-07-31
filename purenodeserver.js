const http = require('http');

function handler(req, res){
res.writeHead(200,{'Content-type':'text/plane'});
res.write("Hello, I am a webServer");
}

const server = http.createServer();

server.listen(3000);