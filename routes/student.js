const express = require('express')
const Create = require('../controllers/student/create')
const Update = require('../controllers/student/update')
const Delete = require('../controllers/student/delete')
const Upgrade = require('../controllers/student/upgrade')
const { Login } = require('../controllers/student/login')
const { VerifyJWT } = require('../controllers/student/verify')
const studentRouter = express.Router()

studentRouter.post('/login', Login)
studentRouter.post('/create', Create)
studentRouter.post('/update', Update)
studentRouter.post('/upgrade', Upgrade)
studentRouter.post('/delete', Delete)
studentRouter.post('/verify',VerifyJWT)

module.exports = { studentRouter }