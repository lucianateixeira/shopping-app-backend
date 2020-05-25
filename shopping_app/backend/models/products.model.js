const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Products = mongoose.model('products', new Schema({}, { strict: false }));
//var User = mongoose.model('users', userSchema);
module.exports = Products;
