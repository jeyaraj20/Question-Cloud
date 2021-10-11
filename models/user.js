var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default:new Date()
  },
  updated_at: {
    type: Date,
    required: true,
    default:new Date()
  }
}, { collection: 'users' });

module.exports = mongoose.model('user', userSchema);
