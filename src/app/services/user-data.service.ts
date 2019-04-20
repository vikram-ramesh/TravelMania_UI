import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user = new User();
  constructor(private http: HttpClient) { }

  createUser(formData: any) {
    this.user.firstName = formData.firstName;
    this.user.lastName = formData.lastName;
    this.user.email = formData.email;
    this.user.password = formData.password;
    return  this.http.post('http://localhost:3000/createUser', this.user);
  }

  getUser(user: any) {
    return this.http.get('http://localhost:3000' + '/getUser/' + user.email + '/' + user.password);
  }

  startPayment(postBody: any) {
    return this.http.post('http://localhost:3000' + '/pay/' + postBody.email, postBody);
  }
}
