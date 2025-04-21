const express = require('express')
const Create = require('../controllers/teacher/create')
const Update = require('../controllers/teacher/update')
const Delete = require('../controllers/teacher/delete')
const Verify = require('../controllers/teacher/verify')
const { Login } = require('../controllers/teacher/login')

const teacherRouter = express.Router()

teacherRouter.post('/login',Login)
teacherRouter.post('/verify',Verify)
teacherRouter.post('/create',Create)
teacherRouter.post('/update',Update)
teacherRouter.post('/delete',Delete)

module.exports = {teacherRouter}