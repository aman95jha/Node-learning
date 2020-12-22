const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userController = require("./Controllers/userController.js");
const shoppingCartController = require("./Controllers/shoppingCartController.js");
const productController = require("./Controllers/productController");
app.set("port", 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/user", userController);
app.use("/api", shoppingCartController);
app.use("/api", productController);
const config = require("./Config");

mongoose.connect(config.getDbConnectionString(), {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
  app.listen(app.get("port"), function () {
    console.log("API Server Listening on port " + app.get("port") + "!");
  });
});
