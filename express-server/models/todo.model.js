const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	name: { type: String, required: true },
	completed: { type: Boolean, default: false },
	createdAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('todo', schema);