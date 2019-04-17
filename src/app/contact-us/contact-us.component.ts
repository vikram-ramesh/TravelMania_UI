import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  shareEmail(fname: HTMLInputElement, message: HTMLInputElement):boolean{

      emailjs.init('user_b0usKkuWEtIVQlb6wrVAd')

    var service_id = 'default_service';
     var template_id = 'template_YkodUUED';
var template_params = {
	to_name: fname.value,
	reply_to: 'chinmay.jomraj7786@gmail.com',
	message_html: message.value
};

     emailjs.send(service_id,template_id,template_params);
    return false;
  }
}
