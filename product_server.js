const products = require("./products");
const http = require("http");

let pList = products.getProducts();
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/json" });
  if (req.url == "/products" && req.method == "GET") {
    res.end(JSON.stringify(pList));
  } else if (req.url == "/addproducts" && req.method == "POST") {
    console.log("In adding ");
    let product = "";
    req.on("data", (chunk) => {
      product += chunk;
    });
    req.on("end", () => {
      pList.push(JSON.parse(product));
      res.end(JSON.stringify(pList));
    });
  } else if (req.url.startsWith("/products/") && req.method == "DELETE") {
    let id = req.url.split("/")[2];
    let index = pList.findIndex((item) => id == item.id);
    pList.splice(index, 1);
    res.end("product deleted : " + id);
  } else if (req.url.startsWith("/updateProducts/") && req.method == "PUT") {
    let id = req.url.split("/")[2];
    let product = "";
    req.on("data", (chunk) => {
      product += chunk;
    });
    req.on("end", () => {
      let index = pList.findIndex((item) => item.id == id);
      pList.splice(index, 1, JSON.parse(product));
      res.end("Item updated");
    });
  } else {
    res.end("In home");
  }
});

const port = 3100;
server.listen(port, () => {
  console.log("server started listening at localhost:" + port);
});
