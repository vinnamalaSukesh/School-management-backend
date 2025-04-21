const express = require('express')
const Create = require('../controllers/class/create')
const Update = require('../controllers/class/update')
const Delete = require('../controllers/class/delete')
const subTeacher = require('../controllers/class/subTeacher')
const classTeacher = require('../controllers/class/classTeacher')
const addSubject = require('../controllers/class/subject')
const classRouter = express.Router()

classRouter.post('/create', Create)
classRouter.post('/update', Update)
classRouter.post('/delete', Delete)
classRouter.post('/subject-teacher',subTeacher)
classRouter.post('/class-teacher',classTeacher)
classRouter.post('/subject',addSubject)

module.exports = { classRouter }