const express = require('express')
const Create = require('../controllers/attendance/create')
const Update = require('../controllers/attendance/update')
const attendanceRouter = express.Router()

attendanceRouter.post('/create',Create)
attendanceRouter.post('/update',Update)

module.exports = { attendanceRouter }