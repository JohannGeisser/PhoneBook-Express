const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  number: String,
  address: String,
});

module.exports = mongoose.model('Organization', OrganizationSchema);
