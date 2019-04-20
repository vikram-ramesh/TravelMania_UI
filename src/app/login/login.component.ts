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

  onSubmit() {
    this.processingStart = true;
    if (this.loginForm.invalid) {
      this.message = 'Form is empty / invalid data';
    } else {
      const userCredentials = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      };
      this.userService.getUser(userCredentials)
      .subscribe((response) => {
        this.success = true;
        this.message = '';
        this.router.navigate(['/home']);

        sessionStorage.setItem('User', JSON.stringify(response));
      }, (err) => {
        this.success = false;
        if (err.status === 401) {
          this.message = 'Invalid Email Id / Password';
        }

        if (err.status === 400) {
          this.message = 'User does not exist';
        }
      });
    }
  }
}
