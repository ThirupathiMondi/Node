const http = require("http");
const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text" });
  if (request.url == "/home" && request.method == "GET") {
    response.end("Data Loaded from home page");
  } else if (request.url == "/products" && request.method == "GET") {
    response.end("Data loaded from products page");
  } else if (request.url == "/orders" && request.method == "GET")
    response.end("Data loaded from orders page");
  else response.end("From login page");
});
const port = 3300;
server.listen(port, () => {
  console.log("server running at localhost:" + port);
});
