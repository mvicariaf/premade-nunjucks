
const Profile = require('../models/profile')
const productCtrl = require('../controllers/profiles')

const exppress = require('express')
window.onload = function() {

var saveButton = $('.btn');

saveButton.('click', productCtrl.saveProfile)
}