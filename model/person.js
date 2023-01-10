const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  surname: String,
  number: String,
  birthday: Date,
  gender: String,
});

module.exports = mongoose.model('Person', PersonSchema);
