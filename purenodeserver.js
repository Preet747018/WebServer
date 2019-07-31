const http = require('http');

function handler(req, res){
res.writeHead(200,{'Content-type':'text/plane'});
}

const server = http.createServer();