import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  success = false;
  processingStart = false;
  message = '';

  constructor(private router: Router, private userService: UserDataService, private formBuilder: FormBuilder,private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
     
    });
  }

  ngOnInit() {
  }

  // onSubmit(){
  //   this.processingStart = true;
  //   if (this.loginForm.valid) {
  //    this.http.post('http://localhost:3000/login', this.loginForm.value)
  //     .subscribe((response) => {
  //       console.log('response from server ', response);
  //       this.success = true;
  //       this.message = '';
  //       this.loginForm.reset();
  //       this.processingStart = false;
  //     }, (error) => {
  //       this.success = false;
  //       this.message = error.error['message'];
  //     });
  //   } else {
  //     this.success = false;
  //     this.message = 'Please enter email Id and password';
  //   }
  // }

  onSubmit(){
    this.processingStart = true;
    const userCredentials = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    }
    this.userService.getUser(userCredentials)
    .subscribe((response) => {
      this.success = true;
      this.message ='';
      this.router.navigate(['/'])
    }, (err)=>{
      this.success = false;
      if(err.status === 401){
        this.message = 'Invalid Email Id \ Password';
      }

      if(err.status === 400){
        this.message = 'User does not exist';
      }
    });
  }
}
