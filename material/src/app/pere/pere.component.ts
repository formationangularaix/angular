import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  resultat: User
  resultat2: any

  constructor() { }

  ngOnInit() {
    this.resultat = new User();
  }

  affiche(myEvent){
    console.log('Affiche Function', myEvent);
    this.resultat = myEvent
  }

  affiche2(myEvent){
    console.log('Affiche2 Function', myEvent);
    this.resultat2 = myEvent
  }

}
