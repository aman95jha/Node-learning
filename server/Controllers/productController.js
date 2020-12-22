const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const productSchema = require("../Models/productModels");

// For products creating
router.post("/products", function (req, res, next) {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//For getting all products
router.get("/allproducts", function (req, res) {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

//for getting products by id
router.get("/products/:id", function (req, res) {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//for updating product by id
router.put("/products/:id", function (req, res, next) {
  productSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, data) {
      if (err) return next(err);
      res.send("Product udpated.");
    }
  );
});

// for deleting product by id
router.delete("/products/:id", function (req, res, next) {
  productSchema.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
});

module.exports = router;
