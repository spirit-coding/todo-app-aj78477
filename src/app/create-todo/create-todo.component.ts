import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styles: []
})
export class CreateTodoComponent implements OnInit {
  public todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
      this.todo = new Todo('Boodschappen doen', false, 'Ik moet eten hebben');
  }

  onSubmit({ value, valid }: { value: Todo, valid: boolean }) {

    if(valid)
      this.todoService.createToDo(this.todo).subscribe(
        data => {
          alert("Saved!");
        },
        err => {
          alert('Something went wrong!');
        }
      );
  }

}
