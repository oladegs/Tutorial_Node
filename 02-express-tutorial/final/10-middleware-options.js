const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

//  req => middleware => res
// 1. use vs route
// 2. options - our own / express / third party

// app.get("/", (req, res) => {
//   logger(req);
//   res.send("Home");
// });

//app.use([authorize, logger]); // Order matters
// api/home/about/products

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000..");
});
