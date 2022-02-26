const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const _ = require("lodash");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(card) {
  const schema = Joi.object({
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).max(1024).required(),
    price: Joi.number().required(),
  });

  return schema.validate(card);
}

exports.Product = Product;
exports.validateProduct = validateProduct;
