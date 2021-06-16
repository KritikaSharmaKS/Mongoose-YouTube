const mongoose = require('../util/database');

const customer = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model('Customer', customer);

module.exports = Customer;