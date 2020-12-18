const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("This is overview");
  } else if (pathname === "/Learning") {
    res.end("This is learning");
  } else {
    res.writeHead(404);
    res.end("This page  of learning cannot be found");
  }
});

server.listen(8000, "Localhost", () => {
  console.log("listening the port 8000");
});
