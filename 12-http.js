const http = require("http");
const server = http.createServer((req, res, err) => {
    res.write("hello");
    res.end();
});

server.listen(8080, () => {
    console.log("server is listening");
});