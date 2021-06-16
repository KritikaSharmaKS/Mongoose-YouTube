const mongoose = require('../util/database');

const order = new mongoose.Schema({
  total: {
    type: Number,
    required: true
  }
});

const Order = mongoose.model('Order', order);

module.exports = Order;