import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  
  constructor(private client:HttpClient) { }

  //this method will return an Observable of type Todo
  getTodos(): Observable<Todo[]>{
    // we will make a request to the service which will return us an array
    // we will cast the array as Todo array and return
    return this.client.get<Todo[]>(this.todosUrl + this.todosLimit);
    
  }

  toggleCompleted(todo:Todo):Observable<any> {
    const url = this.todosUrl + '/' + todo.id;
    return this.client.put(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo) : Observable<any>{
    const url = this.todosUrl + '/' + todo.id;
    return this.client.delete(url, httpOptions);
  }

  addTodo(todo:Todo) : Observable<Todo> {
    return this.client.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}
