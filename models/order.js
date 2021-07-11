const mongoose = require('mongoose');
const connection  = require('../util/database');

const order = new mongoose.Schema({
  total: {
    type: Number,
    required: true
  }
});

const Order = connection.model('Order', order);

module.exports = Order;