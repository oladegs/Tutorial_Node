/* 
 🧰 NPM Essentials — Explained with Symbols

 🔧 NPM (Node Package Manager)
     - Comes pre-installed with Node.js

 🌍 Check npm version:
     npm -v

---------------------------------------

 📦 Installing Packages

 🔹 Local Dependency — for this project only:
     npm install <package-name>
     OR
     npm i <package-name>

 🔹 Global Dependency — use anywhere on your system:
     npm install -g <package-name>         // Windows/Linux
     sudo npm install -g <package-name>    // macOS (requires admin)

---------------------------------------

 📄 package.json — The Project Manifest

 Stores:
     📛 Project name
     🧾 Version
     📚 Description
     🔗 Dependencies
     👤 Author
     🔧 Scripts

 🛠️ Ways to create it:
     ✍️ Manual - Create file & add details manually
     ⚙️ npm init     // Guided step-by-step setup
     ⚡ npm init -y  // Auto-create with default values

 💡 To install a package and save it as a dependency:
     npm install <package-name>

---------------------------------------

 📌 Why package.json matters:
     - Describes your project
     - Lists all dependencies
     - Makes collaboration and reinstallation easier
*/

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
