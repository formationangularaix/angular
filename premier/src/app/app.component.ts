import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'premier';
  name = 'Italo';
  lastName: string;

  modifyName() {
    console.log(this.name);
    this.name = this.name + 'o';
    this.lastName = this.name;
  }

}
