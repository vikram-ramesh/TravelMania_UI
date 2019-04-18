import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  no: any;
  passDetailsForm: FormGroup;
  details = [{name: '', age: '', gender: ''}];
  bookTickets = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { 
    this.passDetailsForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      age: ['', [Validators.required, Validators.pattern('[0-1]{1}[0-9]{0,2}')]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern('^\d{10}$')]]
    });
  }

  ngOnInit() {
    if (sessionStorage.getItem('User')) {
    } else {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(){
    this.bookTickets = true;
    
  }
  add(){
      this.details.push({name: '', age: '', gender: ''});
  }

  remove(){
    if (this.details.length === 1) {} else { this.details.pop(); }
  }

  onSubmit() {
    alert('hello');
  }
}
