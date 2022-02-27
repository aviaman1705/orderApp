const Joi = require("@hapi/joi");
const mongoose = require("mongoose");
const _ = require("lodash");

const orderSchema = new mongoose.Schema({
  items: Array,
  totalAmount: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

function validateOrder(order) {
  const schema = Joi.object({
    items: Joi.array().min(1).required(),
    totalAmount: Joi.number().required(),
  });

  return schema.validate(order);
}

exports.Order = Order;
exports.validateOrder = validateOrder;
