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
  post: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

const BoardRoute = mongoose.model('BoardRoute', boardSchema)

module.exports = BoardRoute
