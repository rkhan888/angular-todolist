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

  constructor() { }

  ngOnInit(): void {
  }

}
