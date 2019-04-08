import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserDataService } from '../services/user-data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message = '';
  isNewUser = true;
  success = false;
  signupForm: FormGroup;
  processingStart = false;

  checkPasswords(group: FormGroup) {
    let pass: string = group.controls.password.value;
    let confirmPass: string = group.controls.repassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  constructor(private router: Router, private userService: UserDataService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      repassword: ['', Validators.required]
    }, {validator: this.checkPasswords});
  }

  ngOnInit() {
  }

  onSubmit() {
    this.processingStart = true;
    if (this.signupForm.valid) {
      this.userService.getUser({email: this.signupForm.controls.email.value})
      .subscribe((response) => {
        this.message = 'User already exists';
      }, (error) => {
        this.userService.createUser(this.signupForm.value)
        .subscribe((done) => {
            console.log('repsonse from server ', done);
            this.success = true;
            this.message = '';
            this.signupForm.reset();
            this.processingStart = false;
            this.router.navigate(['/login']);
        }, (error) => {
          this.success = false;
          this.message = error.error['message'];
        });
      });
    } else {
      this.success = false;
      this.message = this.isNewUser ? 'Invalid Values' : 'This Email Id is already registered';
    }
  }
}
