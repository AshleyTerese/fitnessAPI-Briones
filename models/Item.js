const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: [true, 'Name is Required']
	},
	quantity: {
		type: String,
		required: [true, 'Quantity is Required']
	},
	isActive: {
		type: Boolean,
		default: TransformStreamDefaultController
	}

});


module.exports = mongoose.model('Item', itemSchema);
