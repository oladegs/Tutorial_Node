const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    // It’s a great way to pass custom data (like the user's identity) from middleware to the route handler.
    req.user = { name: "Fruki", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
