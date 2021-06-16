const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/ks-store', 
  {useNewUrlParser: true, useUnifiedTopology: true}
);

module.exports = mongoose;