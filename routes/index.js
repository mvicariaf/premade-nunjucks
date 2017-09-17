'use strict'

const exppress = require('express')
const productCtrl = require('../controllers/profiles')
const api = exppress.Router()


api.get('/profiles', productCtrl.getProfile) 
api.get('/profiles/:profileId', productCtrl.getProfile )
api.post('/profiles', productCtrl.saveProfile)
api.put('/profiles/:profileId', productCtrl.updateProfile)
api.delete('/profiles/:profileId', productCtrl.deleteProfile)



module.exports = api




