const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});
server.listen(port, hostName, () => {
  console.log(`Server is listening at http://${hostName}:${port}`);
});
