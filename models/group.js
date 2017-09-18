'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = Schema({
	owner: String,
	type: { type: String, enum:['pve','pvp'] }, //pve o pvp
	schedule:{ type: String, enum:['mañana','tarde','noche'] },
	game: { type: String, enum:['world of warcraft', 'league of legends', 'dota','overwatch', 'starcraft 2'] },
	users: [],
	signupDate: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Group', GroupSchema)