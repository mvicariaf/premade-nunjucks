'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = Schema({
	name: String,
	email: String,
	password: String,
	place: String,
	game: { type: String, enum:['world of warcraft', 'league of legends', 'dota','overwatch', 'starcraft 2'] },
	bio: String,
	signupDate: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Profile', ProfileSchema)