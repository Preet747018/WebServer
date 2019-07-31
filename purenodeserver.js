const http = require('http');

function handler(req, res){
const parseUrl = url.parse(req.url, true);
console.log(parseUrl);
res.writeHead(200,{'Content-type':'text/plane'});
res.write("Hello, I am a webServer");
res.end();
}

const server = http.createServer();

server.listen(3200);