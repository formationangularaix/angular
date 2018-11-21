import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private myRoute : ActivatedRoute) { }

  ngOnInit() {
    console.log(this.myRoute.params['value'].myParameter)
  }

}
