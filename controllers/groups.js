const Group = require('../models/group')

function getGroup (req, res) {
	let groupId = req.params.groupId

	group.findById(groupId, (err, group) =>{
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!group) return res.status(404).send({message: `El grupo no existe`})

		res.status(200).send({ group })
	})
}

function getGroup (req, res) {
	Group.find({}, (err, groups) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!groups) return res.status(404).send({message: `No existen grupos`})
	
		res.status(200).send({ groups })
	})
}

function saveGroup (req, res) {
	console.log('POST  /api/group')
	console.log(req.body)

	let group = new Group()

	group.game     = req.body.game
	group.owner     = req.body.owner
	group.schedule = req.body.schedule
	group.type = req.body.type

	group.save((err, groupStored) => {
		if (err) res.status(500).send({message: `Error al salvar en la base de datos ${err}`})

		res.status(200).send({group: groupStored}) 
	})
	
}

function updateGroup(req, res) {
	let groupId = req.params.groupId
	let update = req.body

	Group.findByIdAndUpdate(groupId, update, (err, groupUpdated) =>{
		if (err) return res.status(500).send({message: `Error al actualizar el perfil: ${err}`})

		res.status(200).send({ group: groupUpdated })
	})
}

function deleteGroup (req, res) {
	let groupId = req.params.groupId

	Group.findById(groupId, (err, group) =>{
		if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})

		group.remove(err =>{
			if (err) return res.status(500).send({message: `Error al borrar el perfil: ${err}`})
				res.status(200).send({message: 'El perfil ha sido eliminado'})
		})
	})
}


module.exports = {
	
	getGroup,
	getGroup,
	saveGroup,
	updateGroup,
	deleteGroup,
	
}