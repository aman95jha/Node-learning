const express = require("express");
const api = express.Router();
const userRoutes = require("../Routes/users");
const productRoutes = require("../Routes/products");
const cartRoutes = require("../Routes/carts");

api.use("/users", userRoutes);
api.use("/products", productRoutes);
api.use("/carts", cartRoutes);

module.exports = api;
