import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  no: any;
  details = [{name: '', age: '', gender: ''}];
  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('User')) {
    } else {
      this.router.navigate(['/login']);
    }
  }

  add() {
      this.details.push({name: '', age: '', gender: ''});
  }

  remove(){
    if(this.details.length === 1){}
    else this.details.pop();
  }
}
