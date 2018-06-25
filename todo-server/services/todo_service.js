const mongoose = require('mongoose');
const ToDo = require('./TodoSchema');

module.exports = {
	addTodo: (todoObject, callBack) => {
		var newTodo = new ToDo({
			todoName: todoObject.todoName,
			todoStatus: todoObject.todoStatus
		});
		newTodo.save((error, data) => {
			if(error)
				callBack(error, null);
			else
				callBack(null, data);
		});
	},

	findTodos: (callBack) => {
		ToDo.find((error, data) => {
			if(error)
				callBack(error, null);
			else
				callBack(null, data);
		});
	},

	findTodo: (id, callBack) => {
		ToDo.findOne({_id: id}, (error, data) => {
			if(error)
				callBack(error, null);
			else
				callBack(null, data);
		});
	},

	updateTodo: (todoObject, callBack) => {
		ToDo.findOneAndUpdate({_id: todoObject.id}, {$set: {todoStatus: todoObject.todoStatus}}, (error, data) => {
			if(error)
				callBack(error, null);
			else
				callBack(null, data);
		});
	},

	deleteTodo: (id, callBack) => {
		ToDo.remove({_id: id}, (error, data) => {
			if(error)
				callBack(error, null);
			else
				callBack(null, data);
		});
	}
};