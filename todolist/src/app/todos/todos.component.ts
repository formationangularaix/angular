import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input()todo: any;
  @Input()todos: any;

  constructor() { }

  ngOnInit() {
  }

  checkActive(state){
    console.log(state);
  }

  deleteTodo(variable){
    this.todos.splice(this.todos.indexOf(variable), 1);
  }

}
