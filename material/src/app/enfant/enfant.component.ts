import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Output() myEventEmitter = new EventEmitter();
  @Output() testEventEmitter = new EventEmitter();

  monData = {user: 'Italo', age: '29'}
  user: string

  constructor() { }

  ngOnInit() {
  }

  transmet() {
    console.log('Transmet Function', this.monData);
    this.myEventEmitter.emit(this.monData);
  }

  transmet2() {
    console.log('Transmet2 Function', this.user);
    this.testEventEmitter.emit(this.user);
  }

}
