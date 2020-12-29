import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  //create an input property to accept a todo object from html
  @Input()
  todoInput!: Todo;

  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      "is-complete": this.todoInput.completed
    }

    return classes;

  }

  onToggle(todo:Todo){
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on Server
    this.todoservice.toggleCompleted(todo).subscribe(todo => console.log(todo));

    
  }

  onDelete(todo:Todo){
    console.log("delete");
  }

}
