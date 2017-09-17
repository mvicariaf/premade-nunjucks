'use strict'

const exppress = require('express')
const productCtrl = require('../controllers/profiles')
const func = exppress.Router()


func.get('/login/:name', productCtrl.login) 





module.exports = func