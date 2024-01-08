var http = require("http");
var server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text" });
  res.end("Hello from the server \nHow are you from server");
});
port = 3200;
server.listen(port, () => {
  console.log("server running at localhost:" + port);
});
