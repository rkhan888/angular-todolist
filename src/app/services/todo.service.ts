import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

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

}
