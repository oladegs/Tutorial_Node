const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page /");
    // res.write("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Here is our short story");
  }
  res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `);
});

server.listen(5000);

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello World!!!");
