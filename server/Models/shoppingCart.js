var mongoose = require("mongoose");
var cart = mongoose.model(
  "cart",
  new mongoose.Schema({
    product: { type: Object, required: true },
    quantity: { type: Number, required: true },
    userName: { type: String, required: true },
    totalPrice: { type: Number },
  })
);
module.exports = cart;
