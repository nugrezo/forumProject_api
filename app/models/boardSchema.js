const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  boardName: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  topic: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

const UserBoard = mongoose.model('UserBoard', boardSchema)

module.exports = UserBoard
