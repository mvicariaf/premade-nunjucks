'use strict'

const exppress = require('express')
const productCtrl = require('../controllers/profiles')
const groupCtrl = require('../controllers/groups')
const api = exppress.Router()


api.get('/profiles', productCtrl.getProfile) 
api.get('/profiles/:profileId', productCtrl.getProfile )
api.post('/profiles', productCtrl.saveProfile)
api.put('/profiles/:profileId', productCtrl.updateProfile)
api.delete('/profiles/:profileId', productCtrl.deleteProfile)

api.get('/groups', groupCtrl.getGroup) 
api.get('/groups/:groupId', groupCtrl.getGroup )
api.post('/groups', groupCtrl.saveGroup)
api.put('/groups/:profileId', groupCtrl.updateGroup)
api.delete('/groups/:groupId', groupCtrl.deleteGroup)


module.exports = api




