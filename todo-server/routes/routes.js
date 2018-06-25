const express = require('express');
const router = express.Router();

const todoService = require('../services/todo_service');

router.get("/todos", (request, response, next) => {
	todoService.findTodos((error, data) => {
		var responseObject = {};
		if(error) {
			console.log(error);
			responseObject.error = error;
			responseObject.data = null;
		} else {
			responseObject.error = null;
			responseObject.data = data;
		}
		response.json(responseObject);
	});
});

router.get("/todo/:id", (request, response, next) => {
	todoService.findTodo(request.params.id, (error, data) => {
		var responseObject = {};
		if(error) {
			console.log(error);
			responseObject.error = error;
			responseObject.data = null;
		} else {
			responseObject.error = null;
			responseObject.data = data;
		}
		response.json(responseObject);
	});
});

router.post("/todo", (request, response, next) => {
	var todoObject = {};
	todoObject.todoName = request.body.todoName;
	todoObject.todoStatus = request.body.todoStatus;
	todoService.addTodo(todoObject, (error, data) => {
		var responseObject = {};
		if(error) {
			console.log(error);
			responseObject.error = error;
			responseObject.data = null;
		} else {
			responseObject.error = null;
			responseObject.data = data;
		}
		response.json(responseObject);
	});
});

router.put("/todo/:id", (request, response, next) => {
	var todoObject = {};
	todoObject.id = request.params.id;
	todoObject.todoName = request.body.todoName;
	todoObject.todoStatus = request.body.todoStatus;
	todoService.updateTodo(todoObject, (error, data) => {
		var responseObject = {};
		if(error) {
			console.log(error);
			responseObject.error = error;
			responseObject.data = null;
		} else {
			responseObject.error = null;
			responseObject.data = data;
		}
		response.json(responseObject);
	});
});

router.delete("/todo/:id", (request, response, next) => {
	todoService.deleteTodo(request.params.id, (error, data) => {
		var responseObject = {};
		if(error) {
			console.log(error);
			responseObject.error = error;
			responseObject.data = null;
		} else {
			responseObject.error = null;
			responseObject.data = data;
		}
		response.json(responseObject);
	});
});

module.exports = router;