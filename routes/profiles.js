

module.exports = function(app) {
	var Profile = require('../models/profile.js');
	//GET - Return all profiles in the DB
	findAllProfiles = function(req, res) {
		Profile.find(function(err, profiles) {
	  		if(!err) {
	        console.log('GET /profiles')
	  			res.send(profiles);
	  		} else {
	  			console.log('ERROR: ' + err);
	  		}
		});
	};

	//GET - Return a profile with specified ID
	findById = function(req, res) {
		Profile.findById(req.params.id, function(err, profile) {
	  		if(!err) {
	        console.log('GET /profile/' + req.params.id);
	  			res.send(profile);
	  		} else {
	  			console.log('ERROR: ' + err);
	  		}
		});
	};

	//POST - Insert a new profile in the DB
	addProfile = function(req, res) {
		console.log('POST');
		console.log(req.body);

		var profile = new Profile({
			username:   req.body.username,
			password: 	req.body.password
			
		});

	  	profile.save(function(err) {
	  		if(!err) {
	  			console.log('Created');
	  		} else {
	  			console.log('ERROR: ' + err);
	  		}
	  	});

	  	res.send(profile);
	};

	//PUT - Update a register already exists
	updateProfile = function(req, res) {
		Profile.findById(req.params.id, function(err, profile) {
			profile.username  = req.body.petId;
			password: 	req.body.password,
			
  		profile.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(profile);
			});
		});
	};

	//DELETE - Delete a profile with specified ID
	deleteProfile = function(req, res) {
		Profile.findById(req.params.id, function(err, profile) {
			profile.remove(function(err) {
				if(!err) {
  				console.log('Removed');
	  			} else {
	  				console.log('ERROR: ' + err);
	  			}
			})
		});
	};
  app.get('/profiles', findAllProfiles);
  app.get('/profile/:id', findById);
  app.post('/profile', addProfile);
  app.put('/profile/:id', updateProfile);
  app.delete('/profile/:id', deleteProfile);
}