import { Todo } from './../../models/Todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];

  //we initialise our services in the constructor thorough dependency injection
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(mytodos => {
      this.todos = mytodos;
    });
  }

  deleteTodo(todo:Todo){
    // delete from UI
    this.todos = this.todos.filter(t => t.id!=todo.id);

    // delete from the server
    this.todoService.deleteTodo(todo).subscribe();
  }

}
