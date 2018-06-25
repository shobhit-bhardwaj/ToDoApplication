import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Todo} from './todo';

@Injectable()
export class TodoService {

  serviceURL = 'http://localhost:3000/api/';
  headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  addTodo(todo: Todo): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.serviceURL + 'todo', todo, {headers: this.headers})
        .map(response => response.json())
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  getTodos(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.serviceURL + 'todos')
        .map(response => response.json())
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  updateTodo(todo: Todo): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.serviceURL + 'todo/' + todo._id, todo,{headers: this.headers})
        .map(response => response.json())
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  deleteTodo(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.serviceURL + 'todo/' + id)
        .map(response => response.json())
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }
}
