import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styles: []
})
export class TodoOverviewComponent implements OnInit {
  public todolist: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.todoService.getOverview().subscribe(
       lijst => {
       this.todolist = lijst;
      },
      err => {
        alert('Something went wrong!');
      }
    );
  }



}
