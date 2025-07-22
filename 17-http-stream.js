// Import the built-in 'http' module to create an HTTP server
var http = require("http");

// Import the built-in 'fs' (file system) module to work with the file system
var fs = require("fs");
const { error } = require("console");

// Create an HTTP server
http
  .createServer(function (req, res) {
    // // Read the content of 'big.txt' synchronously (blocking)
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // // Send the content of the file as the HTTP response
    // res.end(text);

    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      // Pipe pushes from the read stream into write stream, if we can read data in chunks , we can also write data in chunks - response object can be setup as a writable stream
      fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  // Listen for incoming requests on port 5000
  .listen(5000);
