import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key: string, value: string) {
    console.log('setStorage')
    console.log(key, value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  getStorage(key: string) {
    console.log('getStorage')
    console.log(key);
    let key_value = localStorage.getItem(key);
    console.log(key_value);
  }
  
}
