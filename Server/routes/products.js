const express = require("express");
const _ = require("lodash");
const { Product, validateProduct } = require("../models/product");
const router = express.Router();

//create product
router.post("/", async (req, res) => {
  const { error } = validateProduct(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });

  product = await product.save();
  res.send(product);
});

//get city
// router.get("/:id", async (req, res) => {
//   const city = await City.findOne({
//     _id: req.params.id,
//   });

//   if (!city) {
//     return res.status(404).send("The city with the given ID was not found.");
//   }
//   res.send(city);
// });

//get products
router.get("/", async (req, res) => {
  const products = await Product.find({});

  if (!products) {
    return res.status(404).send("The is no products.");
  }

  res.send(products);
});

//edit city
// router.put("/:id", auth, async (req, res) => {
//   const { error } = validateCity(req.body);
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   }

//   let city = await City.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     useFindAndModify: false,
//   });

//   if (!city) {
//     return res.status(404).send("The city with the given ID was not found.");
//   }

//   city = await City.findOne({ _id: req.params.id });
//   res.send(city);
// });

//delete city
// router.delete("/:id", auth, async (req, res) => {
//   const city = await City.findOneAndRemove({
//     _id: req.params.id,
//   });

//   if (!city) {
//     return res.status(404).send("The city with the given ID was not found.");
//   } else {
//     res.status(200).send("The city was successfully deleted");
//   }
// });

module.exports = router;
