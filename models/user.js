var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema

// define the schema for our user model
var userSchema = new Schema({

    name: String,
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, select: false },
    signupDate: { type: Date, default: Date.now() },
    game: {type: String, enum['world of warcraft', 'league of legends', 'overwatch, dota', 'starcraft 2']},
    place: String,
    bio: String,
    lastLogin: Date
});

// methods ======================
// generating a hash

userSchema.ppre('save', (next) => {
	let user = this
	if (!user.isModified('password')) return next()

	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err)

	bcrypt.hash(user.password, salt, null, (err, hash) => {
		if (err) return next(err)

		user.password = hash
		next()	
		})
	})
})

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);