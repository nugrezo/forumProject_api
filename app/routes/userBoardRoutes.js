// Require in the User Board Schema
const UserBoard = require('../models/boardSchema')

// require in express
const express = require('express')

// require in router
const router = express.Router()

// require passport
const passport = require('passport')

// handle404 error
const handle404 = require('./../../lib/custom_errors')

const customErrors = require('../../lib/custom_errors')

const removeBlanks = require('../../lib/remove_blank_fields')

const requireOwnership = customErrors.requireOwnership

// require Token
const requireToken = passport.authenticate('bearer', { session: false })

// Create router
router.post('/userBoards', requireToken, (req, res, next) => {
  req.body.userBoard.owner = req.user._id

  const userBoardsData = req.body.userBoard
  // use our UserBoard model
  UserBoard.create(userBoardsData)
  // userBoard created successfully
    .then(userBoard => {
      res.status(201).json({ userBoard })
    })
    // Create error
    .catch(next)
})

// Index router
router.get('/userBoards', requireToken, (req, res, next) => {
  UserBoard.find({owner: req.user.id})
    .populate('owner')
    .then(userBoards => {
      return userBoards.map(userBoard => userBoard.toObject())
    })
    .then(userBoards => {
      res.status(201).json({ userBoards })
    })
    .catch(next)
})

// Get all boards for all users sorted by the most recent creation date.
// if we have time the orderBy should be past as a query parameter
router.get('/userBoards/orderdByDateDesc', requireToken, (req, res, next) => {
  UserBoard.find().sort({ createdAt: 'desc' })
    .populate('owner')
    .then(userBoards => {
      return userBoards.map(userBoard => userBoard.toObject())
    })
    .then(userBoards => {
      res.status(201).json({ userBoards })
    })
    .catch(next)
})

// Show router
router.get('/userBoards/:id', requireToken, (req, res, next) => {
  const id = req.params.id

  UserBoard.findById(id)
    .populate('owner')
    .then(handle404)
    .then(userBoards => res.status(200).json({ userBoards }))
    .catch(next)
})

router.patch('/userBoards/:id', requireToken, removeBlanks, (req, res, next) => {
  UserBoard.findById(req.params.id)
    .then(handle404)
    .then(userBoard => {
      requireOwnership(req, userBoard)
      return UserBoard.findByIdAndUpdate({ '_id': req.params.id },
        { $set: req.body.userBoard }, { new: true })
    })
    .then(userBoard => res.json({ userBoard }))
    .catch(next)
})

// Destroy router
router.delete('/userBoards/:id', requireToken, (req, res, next) => {
  const id = req.params.id

  UserBoard.findById(id)
    .then(handle404)
    .then(userBoard => {
      requireOwnership(req, userBoard)
      userBoard.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
