import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output()
  addTodo:EventEmitter<any> = new EventEmitter();

  myTitle!:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      title: this.myTitle,
      completed: false  //since it is a new todo, by default should be false
    }

    //make sure to catch it in <add-todo> tag
    this.addTodo.emit(todo);
  }
}
