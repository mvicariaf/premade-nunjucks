'use strict'

const Profile = require('../models/profile')

function getProfile (req, res) {
	let profileId = req.params.profileId

	Profile.findById(profileId, (err, profile) =>{
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!profile) return res.status(404).send({message: `El perfil no existe`})

		res.status(200).send({ profile })
	})
}

function getProfile (req, res) {
	Profile.find({}, (err, profiles) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!profiles) return res.status(404).send({message: `No existen perfil`})
	
		res.status(200).send({ profiles })
	})
}

function saveProfile (req, res) {
	console.log('POST  /api/profile')
	console.log(req.body)

	let profile = new Profile()

	profile.name     = req.body.name
	profile.email    = req.body.email
	profile.password = req.body.password
	profile.game     = req.body.game
	profile.place    = req.body.place
	profile.bio      = req.body.bio

	profile.save((err, profileStored) => {
		if (err) res.status(500).send({message: `Error al salvar en la base de datos ${err}`})

		res.status(200).send({profile: profileStored}) 
		res.redirect(`/login/${profile.name}`)
	})
	
}

function updateProfile(req, res) {
	let profileId = req.params.profileId
	let update = req.body

	Profile.findByIdAndUpdate(profileId, update, (err, profileUpdated) =>{
		if (err) return res.status(500).send({message: `Error al actualizar el perfil: ${err}`})

		res.status(200).send({ profile: profileUpdated })
	})
}

function deleteProfile (req, res) {
	let profileId = req.params.profileId

	Profile.findById(profileId, (err, profile) =>{
		if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})

		profile.remove(err =>{
			if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})
				res.status(200).send({message: 'El perfil ha sido eliminado'})
		})
	})
}

function login (req, res){
	let name	= req.body.name
	let password = req.body.password
	Profile.findOne({ 'name': name}, (err, profile) => {
		
		if (password ==  profile.password && name == profile.name)	return res.redirect(`/login/${profile.name}`)
		

		if (err) return res.status(404).send({message: `Usuario no válido: ${err}`})
	})

}

module.exports = {
	
	getProfile,
	getProfile,
	saveProfile,
	updateProfile,
	deleteProfile,
	login
	
}