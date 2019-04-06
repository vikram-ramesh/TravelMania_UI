import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  success = false;
  processingStart = false;
  message = '';

  checkPasswords(group: FormGroup) {
    let pass: string = group.controls.password.value;
    let confirmPass: string = group.controls.repassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
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
     this.http.post('http://localhost:3000/createUser', this.signupForm.value)
      .subscribe((response) => {
        console.log('repsonse from server ', response);
        this.success = true;
        this.message = '';
        this.signupForm.reset();
        this.processingStart = false;
      }, (error) => {
        this.success = false;
        this.message = error.error['message'];
      });
    } else {
      this.success = false;
      this.message = 'Invalid Values';
    }
  }
}
