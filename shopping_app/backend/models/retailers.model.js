const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Retailers = mongoose.model('retailers', new Schema({}, { strict: false }));
//var User = mongoose.model('users', userSchema);
module.exports = Retailers;
