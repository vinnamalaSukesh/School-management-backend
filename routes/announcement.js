const express = require('express')
const { Create } = require('../controllers/announcement/create')
const { Update } = require('../controllers/announcement/update')
const { Delete } = require('../controllers/announcement/delete')
const announcementsRouter = express.Router()

announcementsRouter.post('/create',Create)
announcementsRouter.post('/update',Update)
announcementsRouter.post('/delete',Delete)

module.exports = {announcementsRouter}