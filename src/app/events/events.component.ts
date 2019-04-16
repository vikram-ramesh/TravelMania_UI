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
  shortFilmRegistered: boolean;
  magicRegistered: boolean;
  puppetRegistered: boolean;
  gameRegistered: boolean;
  potteryRegistered: boolean;
  karaokeRegistered: boolean;

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('event')) {this.flagSettings(sessionStorage.getItem('event')); }
  }

  flagSettings(eventName) {
    switch (eventName) {
      case 'shortFilm': this.shortFilmRegistered = !this.shortFilmRegistered;
                        break;
      case 'magic': this.magicRegistered = !this.magicRegistered;
                    break;
      case 'puppet': this.puppetRegistered = !this.puppetRegistered;
                     break;
      case 'game': this.gameRegistered = !this.gameRegistered;
                   break;
      case 'pottery': this.potteryRegistered = !this.potteryRegistered;
                      break;
      case 'karaoke': this.karaokeRegistered = !this.karaokeRegistered;
                      break;

    }
  }

  warnUser(testModal: any) {
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

  registerEvent(eventModal: any, eventModalError: any, eventName: string) {
    if (sessionStorage.getItem('event')) {
      this.modalService.open(eventModalError, {centered: true});
    } else {
      sessionStorage.setItem('event', eventName);
      this.modalService.open(eventModal, {centered: true});
      this.flagSettings(eventName);
    }
  }

  deregisterEvent(eventDeregiModal: any, eventName: string) {
      sessionStorage.removeItem('event');
      this.modalService.open(eventDeregiModal, {centered: true});
      this.flagSettings(eventName);
    }
}
