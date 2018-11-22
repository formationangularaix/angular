import { Component } from '@angular/core';
import { StorageService } from './storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularFor';
  theStorage2: StorageService;

  constructor(private theStorage: StorageService) {
      this.theStorage2 = theStorage
  }

  saveStore(){
    this.theStorage.setStorage('test', '12345');
  }

}
