var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  
  questionName: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  correctAnswer: {
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
}, { collection: 'questions' });

module.exports = mongoose.model('question', questionSchema);
