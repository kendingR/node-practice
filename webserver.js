const http = require('http');
const server = http.createServer((_req, _res) => {
    _res.writeHead(200, { 'Content-Type': 'application/json' });
    _res.end(JSON.stringify({
        data: 'Hello World!'
    }));
});

server.listen(8000);
console.log("server is running!")