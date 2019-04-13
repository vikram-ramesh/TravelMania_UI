import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userSignedIn = false;
  user: string;
  data: User;

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.length > 0) {
      this.userSignedIn = true;
      this.data = JSON.parse(sessionStorage.getItem('User'));
      this.user = this.data['user'].firstName;
    }
  }

  logOut() {
    sessionStorage.removeItem('User');
    this.router.navigate(['/']);
  }
}
