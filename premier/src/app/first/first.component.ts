import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  varFirst: string = 'empty';

  changeEmpty(param1: string) {
    console.log('changeEmpty', param1);
    this.varFirst += param1;
  }

  constructor() { }

  ngOnInit() {
  }

}
