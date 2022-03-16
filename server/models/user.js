const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		name: {type: String},
		email: { type: String, required: true, index: { unique: true , sparse: true} },
		password: { type: String, required: true },
		quote: { type: String },
	},
	// { collection: 'user-data' }
)
// mytable.createIndex({
// 	email: 1
// }, {
// 	unique: true,
// })
User.path('email').validate(async function validateDuplicatedEmail(value) {
    if (!this.isNew && !this.isModified('email')) return true;

try {
    const User = mongoose.model("User");

    const count = await User.countDocuments({ email: value });
    if (count > 0) return false;

    return true;
}
catch (error) {
    return false;
}

}, "Email already exists");

// const model = mongoose.model('UserData', User)

module.exports = mongoose.model('User', User)

