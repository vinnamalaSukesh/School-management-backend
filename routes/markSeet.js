const express = require('express')
const Update = require('../controllers/marks/update')
const Create = require('../controllers/marks/create')
const marksRouter = express.Router()

marksRouter.post('/create',Create)
marksRouter.post('/update', Update)

module.exports = { marksRouter }