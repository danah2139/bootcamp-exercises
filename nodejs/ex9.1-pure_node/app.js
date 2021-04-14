const http = require("http");
const fs = require("fs");
const path = require("path");
const usersJson = require("./users.json");

const host = "localhost";
const port = 8000;

const server = http.createServer();
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

server.on("request", (req, res) => {
  if (req.url === "/raw-html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Welcome</h1>`);
  } else if (req.url === "/users") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(usersJson, "utf-8"));
  } else {
    fs.readFile("./index.html", (error, content) => {
      if (content) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content, "utf-8");
      } else {
        res.writeHead(500);
        res.end(
          "Sorry, check with the site admin for error: " + error.code + " ..\n"
        );
      }
    });

    fs.readFile("./index.css", (error, content) => {
      if (content) {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(content, "utf-8");
      } else {
        res.writeHead(500);
        res.end(
          "Sorry, check with the site admin for error: " + error.code + " ..\n"
        );
      }
    });
  }
});
