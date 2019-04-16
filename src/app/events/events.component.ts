import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isRegistered = false;
  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }

  warnUser(testModal) {
    if (sessionStorage.getItem('event')) {
      //navigate user towards ticket booking
    } else {
      this.modalService.open(testModal, {centered: true}).result.then((result) => {
        if (result === 'yes') {
          this.router.navigate(['/login']);
        } else {
          console.log('no');
        }
      });
    }
  }

  registerEvent(eventModal, eventModalError, eventName) {
    if (sessionStorage.getItem('event')) {
      this.modalService.open(eventModalError, {centered: true});
    } else {
      sessionStorage.setItem('event', eventName);
      this.modalService.open(eventModal, {centered: true});
    }
  }
}
