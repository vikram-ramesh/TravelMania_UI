import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as emailjs from 'emailjs-com';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  success = false;
  processingStart = false;
  message = '';
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private modalService: NgbModal) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      msg:   ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  shareEmail(fname: HTMLInputElement, message: HTMLInputElement, confirmationModal: any): boolean {
      this.processingStart = true;

      if (this.contactForm.valid) {
        emailjs.init('user_b0usKkuWEtIVQlb6wrVAd');

        var service_id = 'default_service';
        var template_id = 'template_YkodUUED';
        var template_params = {
          to_name: fname.value,
          reply_to: 'chinmay.jomraj7786@gmail.com',
          message_html: message.value
        };
        emailjs.send(service_id, template_id, template_params);

        this.modalService.open(confirmationModal, {centered: true}).result.then((result) => {if (result === 'yes') {
          this.contactForm.reset();
          this.processingStart = false;
        }});
        return false;
    }
  }
}
