import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input()todo: any;
  @Input()todos: any;

  constructor(private theStorage: StorageService) { 

  }

  ngOnInit() {
  }

  checkActive(state){
    console.log(state);
  }

  deleteTodo(variable){
    this.todos.splice(this.todos.indexOf(variable), 1);
    this.saveStore(this.todos);
  }

  saveStore(todosArray){
    console.log('TODOS by Line', todosArray);
    let stringArray = JSON.stringify(todosArray);
    this.theStorage.setStorage('all_todos', stringArray);
  }

}
