import { Component, Input } from '@angular/core';
// import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  // @Input() todos: TodosComponent[];

  todos = []

  saveTodo(form) {
    console.log(form)
    console.log(form.value)
    let todo_name = form.value['inputname'];
    let todo_state = false;

    console.log(todo_name, todo_state);

    this.todos.push({
      'todo_name': todo_name,
      'todo_state': false
    });

    console.log(this.todos);

    form.reset();

  }


}
