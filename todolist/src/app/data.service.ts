import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  configUrl = 'https://randomuser.me/api/?results=';

  constructor(private http: HttpClient) { 

  }

  getConfig(user_number) {
    return this.http.get(this.configUrl+user_number);
  }

}
