'use strict'

const exppress = require('express')
const productCtrl = require('../controllers/profiles')
const groupCtrl = require('../controllers/groups')
const api = exppress.Router()


api.get('/profile', productCtrl.getProfiles) 
api.get('/profile/:profileId', productCtrl.getProfile )
api.post('/profile', productCtrl.saveProfile)
api.put('/profile/:profileId', productCtrl.updateProfile)
api.delete('/profile/:profileId', productCtrl.deleteProfile)

api.get('/group', groupCtrl.getGroups) 
api.get('/group/:groupId', groupCtrl.getGroup )
api.post('/group', groupCtrl.saveGroup)
api.put('/group/:profileId', groupCtrl.updateGroup)
api.delete('/groups/:groupId', groupCtrl.deleteGroup)


module.exports = api




