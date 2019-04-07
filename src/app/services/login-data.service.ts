import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user = new User();
  constructor(private http: HttpClient) { }


  login(formData: any) {
        this.user.email = formData.email;
        this.user.password = formData.password;
        return  this.http.post('http://localhost:3000/login', this.user);
     }
    
      getUser(user: any) {
        return this.http.get('http://localhost:3000' + '/login/' + user.email + '/' + user.password);
      }
    }