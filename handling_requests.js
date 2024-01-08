const { copyFileSync } = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text" });

  if (req.url == "/home" && req.method == "GET") {
    res.end("Welcome to home");
  } else if (req.url == "/products" && req.method == "GET") {
    res.end("welcome to products");
  } else {
    res.end("Welcome to login");
  }
});

const port = 3100;
server.listen(port, () => {
  console.log("server running at localhost:" + port);
});
