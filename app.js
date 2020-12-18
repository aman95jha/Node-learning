const fs = require("fs");
const express = require("express");
const { json } = require("express");
const app = express();
app.use(express.json());
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Hello from the srever side", app: "carts" });
// });

// app.post("/", (req, res) => {
//   res.send("You can post here now");
// });

const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

app.get("/api/products", (req, res) => {
  res.status(200).json({
    status: "Success",
    results: products.length,
    data: {
      products,
    },
  });
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send("Done");
});

const port = 3000;

app.listen(port, () => {
  console.log("App running on port");
});
