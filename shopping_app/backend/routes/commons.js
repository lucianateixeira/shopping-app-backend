const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const config = require("config");
var fs = require("fs");
const axios = require("axios");
var path = require("path");
const Products = require("../models/products.model");
const Retailers = require("../models/retailers.model");

router.get("/mens", async (req, res) => {
  Products.find({ cat: "men" }, function (err, pdts) {
    console.log(pdts);
    res.send(pdts);
  });
});
router.get("/womens", async (req, res) => {
  Products.find({ cat: "women" }, function (err, pdts) {
    console.log(pdts);
    res.send(pdts);
  });
});
router.post("/update", async (req, res) => {
  const { id, amount } = req.body.body;
  Products.findOneAndUpdate({ id: id }, { price: amount }, function (err) {
    if (err) throw err;
  });
  res.status(200).json("Price SuccessFully Updated");
});
module.exports = router;
