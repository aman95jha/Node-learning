const express = require("express");
const bodyParser = require("body-parser");
const cart = require("../Models/shoppingCart");
const requirelogin = require("../connect/requirelogin");
const router = express.Router();
const jsonParser = bodyParser.json();

const createCart = (req, res) => {
  const user = req.body.user;
  const item = {
    product: req.body.product,
    quantity: req.body.quantity,
  };

  Cart.findOne({ user: user }).then((foundCart) => {
    if (foundCart) {
      let products = foundCart.items.map((item) => item.product + "");
      if (products.includes(item.product)) {
        Cart.findOneAndUpdate(
          {
            user: user,
            items: {
              $elemMatch: { product: item.product },
            },
          },
          {
            $inc: { "items.$.quantity": item.quantity },
          }
        )
          .exec()
          .then(() => res.end());
      } else {
        foundCart.items.push(item);
        foundCart.save().then(() => res.end());
      }
    } else {
      Cart.create({
        user: user,
        items: [item],
      }).then(() => res.end());
    }
  });
};

const getCart = (req, res) => {
  Cart.findOne({ user: req.user.id })
    .populate("items.product")
    .exec((err, cart) => {
      if (!cart) {
        return res.send(null);
      }

      res.send(cart);
    });
};

const updateCart = (req, res) => {
  Cart.findById(req.body.cartId).then((foundCart) => {
    foundCart.items = foundCart.items.filter(
      (item) => item._id != req.body.itemId
    );
    foundCart.save(() => res.end());
  });
};

const deleteCart = (req, res) => {
  Cart.findByIdAndRemove(req.query.id)
    .then(() => res.end())
    .catch((err) => res.send(err));
};

module.exports = {
  createCart: createCart,
  getCart: getCart,
  updateCart: updateCart,
  deleteCart: deleteCart,
};
