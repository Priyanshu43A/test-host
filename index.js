const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/greet/:name", (req, res) => {
  res.render("Home", { name: req.params.name });
});

app.get("/", (req, res) => {
  res.render("create");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
