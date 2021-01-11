const express = require("express");
const bodyParser = require("body-parser");
const userReg = require("../Models/userReg.js");
const config = require("../Config/secret");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { notify } = require("../Routes/users.js");
const { response } = require("express");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const userRegister = async (req, res) => {
  //  1. first will check useer is registered or not
  //  2.if user registered the display user userFound
  //  4.if user not found then we should register the user
  //  5. create user instance
  //  6 save the user instance
  //  7.if saved response with saved user id
  //  8. if not saved send response with error

  try {
    const {
      firstName,
      lastName,
      userName,
      password,
      phnNo,
      address,
      state,
      city,
      pincode,
    } = req.body;

    // 1
    const userFound = await userReg.findOne({ userName: userName });

    //2
    if (userFound) {
      return res.send({
        error: "User already registered",
      });
    }
    //3
    const newUser = userReg({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      password: bcrypt.hashSync(password, 8),
      phnNo: phnNo,
      address: address,
      state: state,
      city: city,
      pincode: pincode,
    });
    //4
    const userSaved = await newUser.save();
    if (!userSaved) {
      return res.send({
        error: " Something went wrong",
      });
    }

    return res.send({
      message: "successfully registered",
      userInfo: userSaved,
    });
  } catch (error) {
    console.log(error);
  }
};

const userLogin = (req, res) => {
  userReg
    .findOne({ userName: req.body.userName.trim() })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400, // 24 hours
          });
          return res.send({ message: true, accessToken: token });
        } else {
          return res.send({ message: "Invalid password", accessToken: null });
        }
      } else {
        return res.send({ message: "Invalid userName" });
      }
    })
    .catch((err) => res.send({ message: "Error in finding the user " }));
};

const getUser = (req, res) => {
  userReg
    .find({ userName: req.params.name })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const updateUser = (req, res) => {
  userReg.findOne({ userName: req.body.userName }, (err, user) => {
    if (err) {
      res.send({ success: false, message: "Not a valid user" });
    } else {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.phnNo = req.body.phnNo;
      user.address = req.body.address;
      user.state = req.body.state;
      user.city = req.body.city;
      user.pincode = req.body.pincode;
      user.save((err) => {
        if (err) {
          res.send({ success: false, message: "Unable to update" });
        } else {
          res.send({ success: true, message: "Updated Successfully" });
        }
      });
    }
  });
};

module.exports = {
  userRegister: userRegister,
  userLogin: userLogin,
  getUser: getUser,
  updateUser: updateUser,
};
