const express = require("express");
const carts = express.Router();
const requirelogin = require("../connect/requirelogin");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const shoppingCartController = require("../Controllers/shoppingCartController");

carts.post(
  "/addcart",
  requirelogin,
  jsonParser,
  shoppingCartController.createCart
);
carts.get("/allcart", requirelogin, shoppingCartController.getCart);

carts.put(
  "/cart/:productId",
  requirelogin,
  jsonParser,
  shoppingCartController.updateCart
);

carts.delete(
  "/cart/:productId",
  requirelogin,
  shoppingCartController.deleteCart
);
module.exports = carts;
