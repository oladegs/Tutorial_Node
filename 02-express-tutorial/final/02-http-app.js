const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

// Create an HTTP server that handles incoming requests
const server = http.createServer((req, res) => {
  // Whatever we are sending back is called the media tag
  //console.log(req.method);

  const url = req.url; // Get the requested URL path
  console.log(url);

  // Home Page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  // styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // image/logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // Logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000); // Server listens on port 5000
