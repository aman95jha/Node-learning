const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const productSchema = require("../Models/productModels");
const { request } = require("express");

// For products creating
const createProduct = (req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};

//For getting all products
const getAllProduct = (req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log(data);
    }
  });
};

//for getting products by id
const getById = (req, res) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

//for updating product by id
const updateById = (req, res, next) => {
  productSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, data) {
      if (err) return next(err);
      res.send("Product udpated.");
    }
  );
};

// for deleting product by id
const deleteById = (req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

module.exports = {
  createProduct: createProduct,
  getAllProduct: getAllProduct,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
};
