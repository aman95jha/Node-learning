const express = require("express");
const products = express.Router();
const productController = require("../Controllers/ProductController");

products.post("/add", productController.createProduct);
products.get("/allproducts", productController.getAllProduct);
products.get("/products/:id", productController.getById);
products.put("/products/:id", productController.updateById);
products.delete("/products/:id", productController.deleteById);
module.exports = products;
