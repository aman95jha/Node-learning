const express = require("express");
const users = express.Router();
const userController = require("../Controllers/userController");

users.post("/register", userController.userRegister);
users.post("/login", userController.userLogin);
users.get("/getUser/:name", userController.getUser);
users.put("/updateDetails", userController.updateUser);

module.exports = users;
