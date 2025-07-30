const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:id", (req, res) => {
  // console.log(req);
  console.log(req.params);
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));

  if (!singleProduct) {
    return res.status(404).send("Product does not exist! :(");
  }

  console.log(singleProduct);
  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  // It copies the values from products into a new array, so that modifying sortedProducts doesn't
  // affect the original products array.
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    //res.status(200).json("No products matched your search! Pele:(");
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {});
console.log("Server is listening on port 5000...");
