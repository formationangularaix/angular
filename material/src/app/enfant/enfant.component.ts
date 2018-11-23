import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from "@angular/forms";
import { User } from '../user'

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Output() myEventEmitter = new EventEmitter();
  @Output() testEventEmitter = new EventEmitter();

  monData: User
  user: string

  constructor() { }

  ngOnInit() {
    this.monData = new User();
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
