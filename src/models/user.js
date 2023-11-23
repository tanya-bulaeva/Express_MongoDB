const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
  },
});

module.exports = mongoose.model('user', userSchema);

// lastName: {
//     type: String,
//     required: true,
//     minlength: 2,
//   },
//   username: {
//     type: String,
//     required: true,
//     minlength: 5,
//   },