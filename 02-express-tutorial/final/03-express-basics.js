// OR : const app = require("express")();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("User hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// app.all("*", (req, res) => {
//   res.status(404).send("<h1>Resource not found</h1>");
// });

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
