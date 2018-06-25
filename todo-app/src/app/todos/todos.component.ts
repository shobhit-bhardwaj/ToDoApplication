import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import {Todo} from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodos();
  }

  addTodo(form) {
    const todo = new Todo();
    todo.todoName = form.value.todoName;
    todo.todoStatus = false;

    this.todoService.addTodo(todo)
      .then(response => {
        this.getTodos();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getTodos() {
    this.todoService.getTodos()
      .then(response => {
        this.todoList = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateTodo(todo) {
    todo.todoStatus = !todo.todoStatus;

    this.todoService.updateTodo(todo)
      .then(response => {
        this.getTodos();
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(id)
      .then(response => {
        this.getTodos();
      })
      .catch(error => {
        console.log(error);
      });
  }
}
