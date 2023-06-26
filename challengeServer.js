const http = require("node:http");
const HOST = 'localhost'; const PORT = 3000
const server = http.createServer((req, res) => {
    let url = req.url.split('/');
    if (req.method === 'GET' && url[1] === '') {
        res.end('Hello, Galvanize!');
    }
    res.statusCode = 404;
    res.end();
})
server.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST}:${PORT}`);
});
