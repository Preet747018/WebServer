const http = require('http');
const url = require('url');

function handler(req, res){
const parseUrl = url.parse(req.url, true);
console.log(parseUrl);

if(parseUrl.pathname ==='/'){
res.writeHead(200,{'Content-type':'text/plane'});
res.write("Yeah, Go Server!!");
res.end();
} else{
    res.writeHead(404,{'Content-type':'text/plain'});
}

}

const server = http.createServer(handler);

server.listen(3000);