const http = require('http');
const url = require('url');

function handler(req, res){
const parseUrl = url.parse(req.url, true);
console.log(parseUrl);
res.writeHead(200,{'Content-type':'text/plane'});
res.write("Hello, I am a webServer");
res.end();
}

const server = http.createServer(handler);

server.listen(3000);