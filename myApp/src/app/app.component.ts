import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  color: string;

  button1_attrs: {} = {'string': 'RED', 'value': 'red'};
  button2_attrs: {} = {'string': 'GREEN', 'value': 'green'};
  button3_attrs: {} = {'string': 'BLUE', 'value': 'blue'};

  changeColor(newcolor: string) {
    console.log(newcolor);
    this.color = newcolor;
  }
}
