const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

module.exports = router;

/*
TL;DR (In Simple Terms):
A router is created.
A POST endpoint is set up.
It checks if the user sent a name.
If yes → responds with “Welcome name”.
If no → responds with “Please provide credentials”.
The router is exported for use in the main app.
*/
