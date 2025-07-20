// Import the built-in 'http' module to create an HTTP server
var http = require("http");

// Import the built-in 'fs' (file system) module to work with the file system
var fs = require("fs");

// Create an HTTP server
http
  .createServer(function (req, res) {
    // Read the content of 'big.txt' synchronously (blocking)
    const text = fs.readFileSync("./content/big.txt", "utf8");

    // Send the content of the file as the HTTP response
    res.end(text);
  })
  // Listen for incoming requests on port 5000
  .listen(5000);
