const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/quote') {
        const quote = {
            quote: "To be or not to be, that is the question.",
            author: "William Shakespeare"
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(quote));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});

