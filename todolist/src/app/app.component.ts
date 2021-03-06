import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'todolist';

  todos = []



  constructor(private theStorage: StorageService,
    ) { 

  }

  ngOnInit() {
    
  }

  

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

    this.setStorageTodos(this.todos);


  }


  setStorageTodos(myTodos){
    let stringArray = JSON.stringify(myTodos);
    this.theStorage.setStorage('all_todos', stringArray);
  }


}