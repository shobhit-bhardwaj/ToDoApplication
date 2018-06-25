const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	todoName: {type: String},
	todoStatus: {type: Boolean}
});

module.exports = mongoose.model('ToDo', TodoSchema, 'todos');