const express = require('express')
const Create = require('../controllers/subject/create')
const Delete = require('../controllers/subject/delete')
const Update = require('../controllers/subject/update')
const subjectRouter = express.Router()

subjectRouter.post('/create', Create)
subjectRouter.post('/update',Update)
subjectRouter.post('/delete',Delete)

module.exports = { subjectRouter }