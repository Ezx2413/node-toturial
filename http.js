const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Amir');
        res.end();
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');
    } else {
        res.end('ridi...');
    }
}).listen(5000 , console.log("server is run.."));