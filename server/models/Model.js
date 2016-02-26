var mongoose = require('mongoose');

var ValueSchema = new mongoose.Schema({
	name: String,
	value: Number
}) 

mongoose.model('values', ValueSchema);