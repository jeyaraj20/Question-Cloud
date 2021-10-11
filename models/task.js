var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
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
  gender: {
    type: String,
    required: true
  },
  status: {
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
}, { collection: 'tasks' });

module.exports = mongoose.model('task', taskSchema);
