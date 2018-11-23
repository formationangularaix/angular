import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  resultat = {}
  resultat2: any

  constructor() { }

  ngOnInit() {
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
